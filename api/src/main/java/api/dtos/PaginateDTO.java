package api.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PaginateDTO {

    private Integer pageNumber;
    private Integer pageSize;

    public Pageable getPageable() {
        return PageRequest.of(pageNumber, pageSize);
    }
}
