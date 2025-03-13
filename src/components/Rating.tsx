import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useAddMovieRatingMutation } from "@/features/ratingsSlice";
import { useAppSelector } from "@/hooks";

interface RatingProps {
  movieID: number;
}

const Rating = ({ movieID }: RatingProps) => {
  const [position, setPosition] = useState("5");

  const [triggerAddMovieRating, _result] = useAddMovieRatingMutation();

  const userID = useAppSelector((state) => state.auth.id);

  const addMovieRating = () => {
    triggerAddMovieRating({
      movieID,
      userID: userID,
      rating: Number(position),
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <span>
            <StarBorderIcon style={{ color: "black" }} />
            5.0
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rate this movie</DialogTitle>
          </DialogHeader>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4">4</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={addMovieRating}>Rate!</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rating;
