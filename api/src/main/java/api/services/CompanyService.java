package api.services;

import api.dtos.filters.CompanyFilterDTO;
import api.models.Company;
import api.repositories.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CompanyService {

    private final CompanyRepository repository;

    public Page<Company> search(CompanyFilterDTO filter) {
        return this.repository.search(
                filter.getName(),
                filter.getDescription(),
                filter.getCity(),
                filter.getEmail(),
                filter.getPageable()
        );
    }
}
