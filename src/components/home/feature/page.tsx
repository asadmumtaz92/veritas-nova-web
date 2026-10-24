import Image from 'next/image'

interface CARDPROPS {
    icon: string,
    title?: string,
    desc?: string,
}

const FeatureSection = () => {

    const cardData: CARDPROPS[] = [
        {
            icon: '/icons/1.svg',
            title: 'Precision Engineered',
            desc: 'Manufactured to ±0.05 mm tolerances for consistent loop size and fit.',
        }, {
            icon: '/icons/2.svg',
            title: 'High Tensile Strength',
            desc: 'Rated up to 1,600 kgf/mm² to secure even the heaviest bales.',
        }, {
            icon: '/icons/2A.jpg',
            title: '',
            desc: '',
        }, {
            icon: '/icons/3.svg',
            title: 'Corrosion-Resistant Finishes',
            desc: 'Choose from black annealed, hot-dip galvanized, or phosphate coated.',
        }, {
            icon: '/icons/4.svg',
            title: 'Quick-Link Design',
            desc: 'Installs in seconds without specialized tools.',
        }, {
            icon: '/icons/5.svg',
            title: 'Safety Certified',
            desc: 'Meets ASTM A641 and ISO 9001 quality standards.',
        },
    ]

    const ItemCard = ({ icon, title, desc }: CARDPROPS) => {
        return <div className={`max-w-[500px] mx-auto w-full flex flex-col gap-[23px] bg-[#17394F] min-h-[320px] lg:min-h-[360px] h-full text-white py-[73px] px-[31px] hover:rounded-md hover:shadow-2xl ease-in-out duration-500`}>
            <Image src={icon} priority className='' width={51} height={51} alt='icon' />
            <h3 className="font-semibold text-lg">{title}</h3>
            <p>{desc}</p>
        </div>
    }
    const ImageCard = ({ icon }: CARDPROPS) => {
        return <div className="max-w-[500px] mx-auto w-full overflow-hidden hover:rounded-md hover:shadow-2xl ease-in-out duration-500">
            <Image
                src={icon} priority width={600} height={400} alt="Baling Ties"
                className="w-full min-h-[320px] lg:min-h-[360px] h-full object-cover bg-center"
            />
        </div>
    }

    return (
        <section id="features" className="pt-[155px] bg-white px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-[60px]">
                Why Choose Our Baling Ties?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData?.map((item: CARDPROPS, idx: number) => {
                    return idx == 2
                        ? <ImageCard key={idx} {...item} />
                        : <ItemCard key={idx} {...item} />
                })}
            </div>
        </section>
    )
}

export default FeatureSection
