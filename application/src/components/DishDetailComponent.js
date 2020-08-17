import React,{Component} from 'react'
import {Card,CardImg,CardText,CardTitle} from 'reactstrap';

class DishDetail extends Component{

    

    componentDidMount()
        {
            console.log("DishDetail Component componentDidMount invoked")
        }

    componentDidUpdate(){
        console.log("DishDetail Cmponent componentDidUpdate invoked ")
    }
    

    render()
    {
        console.log("DishDetail Component render invoked")
        if(this.props.dish!=null)
        {
            const comment_section=this.props.dish.comments.map((comment)=>{
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
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardTitle><h3>{this.props.dish.name}</h3></CardTitle>
                        <CardText>{this.props.dish.description} </CardText>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardTitle><h3 style={{"paddingLeft":"1em"}} >Comments</h3></CardTitle>
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