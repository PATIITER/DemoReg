import { dataTeacher } from './teacher';
import { dataStudent } from './student';

export class dataOpenCourse{

    IdCourse:string;
    NameCourse:string;
    Teacher :dataTeacher[];
    Students:dataStudent[];
    
    
    }
    