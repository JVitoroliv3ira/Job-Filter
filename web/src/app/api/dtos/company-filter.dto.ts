import { PaginateDTO } from "./paginate.dto";

export interface CompanyFilterDTO extends PaginateDTO {
    name: string;
    description: string;
    email: string;
    city: string;
}