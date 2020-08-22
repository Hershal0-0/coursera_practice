import React from 'react'
import {Card,CardImg,CardText,CardTitle} from 'reactstrap';

    const renderComments=(dish)=>{
        const comments=dish.comments.map((comment)=>{
            // ISO Date to Long Date
            // const date=new Date(comment.date)
            // date.toDateString().slice(4,)
            return(
                <div key={comment.id} className="padding_left">
                    <p>{comment.comment}</p><br />
            <p>--{comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',date:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        })
        return comments
    }

    function RenderDish({dish})
    {
        if(dish!=null)
        {
            
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardTitle><h3>{dish.name}</h3></CardTitle>
                        <CardText>{dish.description} </CardText>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardTitle><h3 style={{"paddingLeft":"1em"}} >Comments</h3></CardTitle>
                        <div className="comment" >{renderComments(dish)}</div>
                    </Card>
                </div>
                </div>
            )
        }

        else
        {
            return(<div></div>)
        }
    }



export default RenderDish