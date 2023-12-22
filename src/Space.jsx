import Fruit from "./Fruit";
import Segment from "./Segment";
//TODO: memo-ize?
function Space ({contents}) {


    return (
        <div className="Space">
            {
                contents &&
                ((contents === "F" && <Fruit />) ||
                (contents === "S" && <Segment />))
            }
        </div>
    )
}

export default Space;
