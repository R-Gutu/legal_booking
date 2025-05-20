import Image from "next/image"

interface Info {
    title: string
    points: string[]
    icon: string
}

export default function Services() {
    const info : Info[] = [
        {
            title: 'Consultanță și abonamente',
            points: [
                'Consultanță juridică generală',
                'Abonament lunar/anual pentru companii',
                'Asistență în fața instituțiilor de stat (FISC, primării etc.)',
                'Pregătire licitații, achiziții, granturi'
            ],
            icon: '/svgs/pillar.svg'
        },
        {
            title: 'Contracte și înregistrări',
            points: [
                'Revizuire și redactare contracte comerciale',
                'Întocmirea documentelor pentru SRL/IP',
                'Înregistrare și lichidare SRL în 3 zile'
            ],
            icon: '/svgs/note.svg'
        },
        {
            title: 'Reprezentare legală',
            points: [
                'Reprezentare în instanță (civil, contravențional, penal)',
                'Mediere & soluționare conflicte',
                'Suport dosare CEDO'
            ],
            icon: '/svgs/person.svg'
        },
        {
            title: 'Online și digital',
            points: [
                'Consultanță juridică online',
                'Asistență rapidă fără programare, direct din platformă'
            ],
            icon: '/svgs/search.svg'
        },
        {
            title: 'Proprietate intelectuală',
            points: [
                'Înregistrări AGEPI',
                'Protecția drepturilor de autor și mărci'
            ],
            icon: '/svgs/coin.svg'
        },
        {
            title: 'Speciale',
            points:[
                'Asistență accidente rutiere (cu broker)',
                'Dreptul familiei (custodie, partaj etc.)'
            ],
            icon: '/svgs/scales.svg'
        }
    ]
    return(
        <div className="bg-white px-44 max-[1250px]:px-20 max-[760px]:px-10 pt-30 max-[760px]:pt-10 flex flex-col">
            <p className="font-playfair text-[50px] font-bold mb-3 text-[#1B1E21] max-[760px]:text-center max-[760px]:text-[35px]">Serviciile noastre</p>
            <p className="font-inter text-[#3F4242] max-w-[580px] max-[760px]:text-center">
                Găsești tot sprijinul juridic de care ai nevoie, într-un singur loc. <br/>
                Indiferent dacă ai nevoie de asistență pentru documente, reprezentare în instanță sau sprijin rapid online — echipa noastră este gata să intervină.
            </p>
            <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1 gap-15 py-20">
                {info.map(({title, points, icon}) => <div key={title} className="flex flex-col gap-5">
                    <Image src={icon} width={75} height={75} alt={title} />
                    <p className="font-playfair font-bold text-[#1B1E21] text-[18px] uppercase">{title}</p>
                    <ul>
                        {points.map(s=><li key={s} className="text-[#3F4242] text-[16px] ml-2 font-inter"><span className="font-bold text-[25px] mr-2 text-black">•</span>{s}</li>)}
                    </ul>
                </div>)}
            </div>
            <div className="flex flex-col self-center mb-30">
                <Image src="/svgs/hammer.svg" width={220} height={190} alt="hammer" className="self-center"/>
                <p className="uppercase font-playfair font-bold text-[30px] text-[#1B1E21]">Pachet cu abonament lunar sau anual</p>
                <p className="max-w-[620px] font-inter text-[16px] text-[#3F4242]">
                    Rezolvăm orice întrebare juridică a companiei tale.<br />
                    Încheie un contract anual, achiți lunar și primești suport juridic continuu — fără griji, fără complicații.
                </p>
            </div>
        </div>
    )
}