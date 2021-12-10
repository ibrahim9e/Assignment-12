import { Grid, Container } from '@mui/material';
import Booking from '../Booking/Booking';

const products = [
    {
        "id": 1,
        "name": " La-sovereign",
        "details": ".. The parcel Hotpink Lesum is used as an identifier on your local parcel maps and it has a unique format",
        "price": "$ 399",
        "img": "https://5.imimg.com/data5/NR/CI/SN/IOS-45339558/product-jpeg-500x500.png"
    },
    {
        "id": 2,
        "name": "Hercules",
        "details": "The parcel Hand Wash Powder is used as an identifier on your local parcel maps and it has a unique format",
        "price": "$ 400",
        "img": "https://www.thehindubusinessline.com/companies/w2yyxx/article36433113.ece/ALTERNATES/LANDSCAPE_1200/bl14StyStryder-CyclesContino"
    },
    {
        "id": 3,
        "name":"Road Master.",
        "details": "The parcel number is used as an identifier on your local parcel maps and it has a unique format",
        "price": "$ 330",
        "img": "https://images.financialexpress.com/2021/01/nahak-e-cycle.jpeg"
    },
    {
        "id": 4,
        "name": "Mach City.",
        "details": "A parcel number is assigned by your local tax assessment office and is used to help identify your property for tax.",
        "price": "$ 250",
        "img": "https://rukminim1.flixcart.com/image/416/416/km9ht3k0/cycle/v/u/j/lee-epic-shocker-20-cycle-for-kids-20-20-dolfin-single-speed-original-imagf78mhyfqxt4h.jpeg?q=70"
    },
    {
        "id": 5,
        "name": "Avon Strong cycle",
        "details": "a defined piece of real estate, usually resulting from the division of a large area of land..",
        "price": "$300",
        "img": "https://cdn.shopify.com/s/files/1/2980/5140/files/3_186b9554-1029-49ae-934a-545989cc38e0_600x600.jpg?v=1608020238"
    },
    {
        "id": 6,
        "name": "Hero Raod Master",
        "details": ".. The parcel number is used as an identifier on your local parcel maps and it has a unique format",
        "price": "$200",
        "img": "https://5.imimg.com/data5/SELLER/Default/2020/11/VD/CN/BI/118508263/macwheel-cycle-500x500.jpeg"
    }
  ]

const AvailableProducts = () => {
  
    return (
        <Container>
            <h1>Available Products</h1>
            <Grid container spacing={5}>
             {
                 products.map(product=><Booking
                 key={product.id}
                 product={product}
                 ></Booking>)
             }
       </Grid>
        </Container>
    );
};

export default AvailableProducts;