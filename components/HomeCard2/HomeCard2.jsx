import './HomeCard2.css'
import Image from 'next/image'

const HomeCard2 = () =>{
    return(
        <div className="aboutCard2">
                <div className="cardLeft2">
                    <h1>Lorem Ipsum Dolor</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
                </div>
                <div className="cardRight2">
                    <div className="decorationCard2">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/rumah2.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardBottom2">
                        <div className="blueDecoration2"></div>
                        <div className="buletCardUtama2"></div>
                        <div className="buletCard2"></div>
                        <div className="buletCard2"></div>
                        <div className="buletCard2"></div>
                        <div className="buletCard2"></div>


                </div>
            </div>
            
    )
}

export default HomeCard2