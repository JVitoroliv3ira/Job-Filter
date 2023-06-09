import { OpportunityType } from "../enums/opportunity-type";
import { Company } from "./company";
import { Tag } from "./tag";

export interface Opportunity {
    id: number;
    name: string;
    description: string;
    salary: number;
    type: OpportunityType;
    company: Company;
    tags: Array<Tag>
}