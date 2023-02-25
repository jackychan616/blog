import Link from 'next/link';
import Image from 'next/image';
function Notfound(){
    return(
        <div className="container">
            <Image src = "/img/404.png"  layout = "fill"  quality = {100}/>
            <h2 >不好意思!這裡沒有任何東西</h2>
            <Link href="/" style = {{textDecoration: 'none', color : 'white' ,display :"inline-block" ,backgroundColor : "Gray"}}>回到首頁</Link>
        </div>
    );
}

export default Notfound;