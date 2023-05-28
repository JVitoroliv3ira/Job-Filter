package api.dtos.filters;

import api.dtos.PaginateDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CompanyFilterDTO extends PaginateDTO {
    private String name;
    private String description;
    private String email;
    private String city;
}
