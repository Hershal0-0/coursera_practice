import React,{Component} from 'react'
import {Card,CardImg,CardText,CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props)
    }

    render()
    {
        if(this.props.dish!=null)
        {
            const comment_section=this.props.dish.comments.map((comment)=>{
                const date=new Date(comment.date)

                return(
                    <div key={comment.id} className="padding_left">
                        <p>{comment.comment}</p><br />
                <p>--{comment.author},{date.toDateString().slice(4,)}</p>
                    </div>
                )
            })
            return(
                <div class="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardTitle><h3>{this.props.dish.name}</h3></CardTitle>
                        <CardText>{this.props.dish.description} </CardText>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardTitle><h3 style={{"padding-left":"1em"}} >Comments</h3></CardTitle>
                        <div className="comment" >{comment_section}</div>
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

}

export default DishDetail