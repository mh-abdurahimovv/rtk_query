import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Grid from '@mui/material/Grid';

import { useGetAllProductsQuery } from '../store/apiSlice';

import { useDispatch } from 'react-redux';

import { add } from '../store/cartSlice';








export default function ProductCard() {
    const { data: allProductsData } = useGetAllProductsQuery();

    const dispatch = useDispatch()


    const addToCart = (product) => {
        console.log("Adding to cart:", product);
        dispatch(add(product))
    }

    return (
        <Grid container spacing={20}>
            {Array.isArray(allProductsData?.products) ? (
                allProductsData.products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                            <CardOverflow>
                                <AspectRatio sx={{ minWidth: 200 }}>
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                    />
                                </AspectRatio>
                            </CardOverflow>
                            <CardContent>
                                <Typography variant="body-xs">{product.category}</Typography>
                                <Link
                                    href={`#${product.id}`}
                                    fontWeight="md"
                                    color="neutral"
                                    textColor="text.primary"
                                    overlay
                                    endDecorator={<ArrowOutwardIcon />}
                                >
                                    {product.title}
                                </Link>

                                <Typography
                                    variant="title-lg"
                                    sx={{ mt: 1, fontWeight: 'xl' }}
                                    endDecorator={
                                        <Chip
                                            component="span"
                                            size="sm"
                                            variant="soft"
                                            color="success"
                                        >
                                            Lowest price
                                        </Chip>
                                    }
                                >
                                    {product.price}$
                                </Typography>
                                <Typography variant="body-sm">
                                    (Only <b>{product.stock}</b> left in stock!)
                                </Typography>
                            </CardContent>
                            <CardOverflow>
                                <Button variant="solid" color="primary" size="lg" onClick={() => addToCart(product)}>
                                    Add to cart
                                </Button>
                            </CardOverflow>
                        </Card>
                    </Grid>
                ))
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Grid>
    );
}
