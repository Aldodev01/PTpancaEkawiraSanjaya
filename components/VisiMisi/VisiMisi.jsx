import './VisiMisi.css'
import Image from 'next/image'

const VisiMisi = () =>{
    return(
        <div className="visiMisi">
        <div className="imgContainer">
        <div className="darkEffect">
            <h1>OUR MISSION</h1>
        <h3>Being the best distributor on providing the best solution for customer by working closely with our suppliers and our customers. We strive to provide an excellent marketing service that is supported by an experienced sales team.</h3>
        </div>
        <Image
            src="/kardus.svg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"                
        />
        
        </div>
        
        
        </div>
    )
}

export default VisiMisi