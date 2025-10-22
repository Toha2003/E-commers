import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RatingComponent from "../rating/RatingComponent";

const CardProducts = ({id, title, brand, description, images, price, rating}) => {
    
  return (
    <Card className="container__addToCard relative flex-[0_0_345px] flex flex-col justify-between" sx={{ maxWidth: 345 }}>
      <div className="relative">
        <CardMedia 
          component="img"
          width={50}
          image={images[0]}
          title="green iguana"
        />
        <div className="bg-black hidden h-[41px] rounded-sm absolute bottom-0 w-full  addToCard cursor-pointer">
          <p className="text-white">Add To Card</p>
        </div>
      </div>
      <CardContent className="mt-[-15px]">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <RatingComponent  rating={rating}/>
    </Card>
  );
};

export default CardProducts;
