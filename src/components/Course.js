import axios from 'axios'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from 'reactstrap'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'

export const Course = ({course,update})=>{
const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`)
    .then((response)=>{
     toast.success('course deleted')
     update(id)
    },
    (error)=>{
       toast.error('course not deleted !! server problem') 
    })
}
    return(
        <Card>
            <CardBody>
                <CardSubtitle style={{fontWeight:"bold"}}>
                    {course.title}
                </CardSubtitle>
                <CardText >
                   {course.description}
                </CardText>
                <Container>
                    <Button color="danger"
                    onClick={()=>{
                        deleteCourse(course.id)
                    }}>Delete</Button>
                    <Button color="warning" style={{marginLeft:5}}>Update</Button>
                    
                </Container>
            </CardBody>
        </Card>
    )
}