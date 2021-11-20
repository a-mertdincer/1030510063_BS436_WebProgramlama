import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false,
            game: null
        }
    }
    componentDidMount(){
        this.startNewGame();
    }

    startNewGame = () => {
        this.yeniOyun()
        this.setState({
            game:{
                victory: false,
                defeat: false,
        }
        })
    }

    kediSec = (index) => {
        const { kart, kediIndex, kartSayac, oyunSonlandi } = this.state;
        const game = this.state.game;
        
        if(!oyunSonlandi){
        const yeniKart = [...kart];
        let durum;

        if(kediIndex===index){
            yeniKart[index] = "img/Kedi.jpg";
            durum = "Kazandınız :)"
            this.setState({
                game:{victory:true}
            })
            
        }else {
            yeniKart[index] = "img/Kopek.jpeg";
            if(kartSayac===1){
                this.setState({
                    game:{defeat:true}
                })
                durum = "Kaybettiniz :("
            }
        }
        this.setState({
            kart:yeniKart,
            kartSayac: this.state.kartSayac+1,
            durum
        });

        if(durum){
            this.setState({
                oyunSonlandi: true
            })
        }

        }
    }

    yeniOyun = () => {
        this.setState({
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false
        })
    }

    render(){

        const game = this.state.game;
        if(!game){
            return <h2>Yukleniyor...</h2>
        }

        if(game.victory){
            return(
                <div>
                    <div className="game-result"><h2>Kazandiniz!</h2>
                <img class="kart" src="img/Kedi.jpg"/>
                    </div>
                    <div>
                    <button className = "play new-game-button" onClick = {this.startNewGame}>Yeni Oyun</button>
                    </div>   
                </div>
                
            )
        }

        if(game.defeat){
            return(
                <div>
                    <div className="game-result"><h2>Bruh</h2>
                <img class="kart" src="img/Kopek.jpeg"/>
                    </div>
                    <div>
                    <button className = "play new-game-button" onClick = {this.startNewGame}>Yeni Oyun</button>
                    </div>   
                </div>
                
            )
        }
        const { kart, durum } = this.state;
        return (
 <div>
    <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen
    2. seçim hakkı tanınacaktır.</p>
    <img className="kart" src={kart[0]} onClick={()=>{this.kediSec(0)}}/>
    <img className="kart" src={kart[1]} onClick={()=>{this.kediSec(1)}}/>
    <img className="kart" src={kart[2]} onClick={()=>{this.kediSec(2)}}/>
    <div className="mesaj">
        <p>{durum?durum:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
        {/* {durum && <p>
            Yeni bir oyun oynamak istersen <span onClick={this.yeniOyun} className='link'>buraya</span> tıklayabilirsin.
        </p>} */}
    </div>
</div> 
        );
    }
}
