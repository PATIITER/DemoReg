import { dataTeacher } from './teacher';
import { dataStudent } from './student';

export class dataOpenCourse{

    idCourse:string;
    nameCourse:string;
    teacher :dataTeacher[];
    students:dataStudent[];
    
    
    }
    