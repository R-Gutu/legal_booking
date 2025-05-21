'use client'
import Image from 'next/image'
import Carousel from './Carousel'


export default function Vouches() {
    const vouches = [
        {
            image: '/images/vouch1.png',
            text: '„Colaborarea cu LegalBooking a fost una dintre cele mai bune decizii pentru afacerea mea. Totul a fost clar, rapid și profesionist. Recomand cu încredere.”',
            title: ' Elena T., fondatoare startup'
        },
        {
            image: '/images/vouch2.jpg',
            text: '„Am fost impresionat de atenția la detalii și de comunicarea constantă. Echipa LegalBooking a reușit să rezolve o situație complexă într-un timp record.”',
            title: 'Mihai D., avocat'
        },
        {
            image: '/images/vouch3.png',
            text: '„Serviciile lor mi-au oferit liniștea necesară pentru a mă concentra pe business. Sunt rapizi, eficienți și mereu disponibili.”',
            title: 'Roxana V., manager proiect'
        },
        {
            image: '/images/vouch4.jpg',
            text: '„Lucrez cu LegalBooking de peste un an și mereu au fost alături de mine când am avut nevoie. Un partener de încredere.”',
            title: 'Cătălin P., antreprenor tech'
        },
        {
            image: '/images/vouch5.png',
            text: '„Am avut plăcerea de a colabora cu echipa LegalBooking și pot afirma cu încredere că sunt printre cei mai buni din domeniu. Profesionalismul, dedicarea și soluțiile clare oferite mi-au depășit așteptările. Sunt recunoscător pentru sprijinul lor constant.”',
            title: 'Andrei M., antreprenor'
        }
    ]
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[50px] font-playfair font-bold text-white text-center'>Clienții noștri ne <br /> recomandă</p>
            <Carousel slides={vouches.map(({ image, text, title }) => <div key={title} className="keen-slider__slide flex justify-center flex-col items-center gap-8 w-full">
                <div className='w-[125px] h-[125px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src={image} width={125} height={125} alt={title} className='w-full h-full object-center object-cover' />
                </div>
                <p className='text-white font-inter w-[50%] text-center text-[18px]'>{text}</p>
                <p className='text-white font-inter text-center text-[16px]'>{title}</p>
            </div>)} />
        </div>
    )
}