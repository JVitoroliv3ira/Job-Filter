package api.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PaginatedResultDTO<T> {
    public PaginatedResultDTO(Page<T> page) {
        this.data = page.getContent();
        this.currentPage = page.getPageable().getPageNumber();
        this.pageSize = page.getPageable().getPageSize();
        this.totalPages = page.getTotalPages();
    }

    private List<T> data;
    private Integer currentPage;
    private Integer pageSize;
    private Integer totalPages;
}
