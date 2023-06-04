import { OpportunityType } from "../enums/opportunity-type";
import { Tag } from "../models/tag";
import { PaginateDTO } from "./paginate.dto";

export interface OpportunityFilterDTO extends PaginateDTO {
    name: string;
    description: string;
    salary: number;
    companyName: string;
    type: OpportunityType;
    tag: Tag;
}