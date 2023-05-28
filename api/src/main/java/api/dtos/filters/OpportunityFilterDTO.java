package api.dtos.filters;

import api.dtos.PaginateDTO;
import api.enums.OpportunityType;
import api.models.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OpportunityFilterDTO extends PaginateDTO {
    private String name;

    private String description;

    private Long salary;

    private String companyName;

    private OpportunityType type;

    private Tag tag;

}
