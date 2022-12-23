
import DetailsPage from '../components/slug';
import ApartmentData from '../utils/apartments';
import {useRouter} from 'next/router';


const ApartmentPage = ( data ) => {

    const router = useRouter();
    const { slug } = router.query;


    const newArr = ApartmentData.find(data => data.slug === slug);

    let results =[newArr];


    const page = results.map((data) => {
        return (
            <DetailsPage key={data.key}
                image1={data.image[0]}
                image2={data.image[1]}
                location={data.location}
                title={data.title}
                price={data.price}
                availability={data.availability}
                about={data.about}
                features={data.features}
                beds={data.bedrooms}
                details1={data.details[0]}
                details2={data.details[1]}

            />
        )
    })

    return (
        <div>
            {page}
        </div>
 );
}
 
export async function getStaticProps() {
  
    const res = await fetch('https://.../[slug]')
    const data = await res.json()
  
    return {
      props: {
        data,
      },
    }
  }

  export async function getStaticPaths() {
  
    return {
     paths: [
         '/[...slug]',
         { params: { slug: '/[...slug]'}},
     ],
     fallback: false,
    }
   }

 
export default ApartmentPage;