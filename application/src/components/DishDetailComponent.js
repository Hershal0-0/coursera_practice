import React from 'react'
import {Card,CardImg,CardText,CardTitle,CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'
    const RenderComments=(props)=>{
        const comments=props.comments.map((comment)=>{
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
        return (
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardTitle>Comments</CardTitle>
                <CardBody>{comments}</CardBody>
            </Card>
            </div>
        )
    }

    function RenderDish(props){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                    <CardTitle><h3>{props.dish.name}</h3></CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </Card>
            </div>
        )
    }
    

    function DishDetail(props)
    {
        if(props.dish!=null)
        {
            
            return(
                <div className="container">
                        <div className="row">
                            <Breadcrumb>
                            <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <RenderDish dish={props.dish} />
                            <RenderComments comments={props.comments} />

                        </div>
                </div>
            )
        }

        else
        {
            return(<div></div>)
        }
    }



export default DishDetail;