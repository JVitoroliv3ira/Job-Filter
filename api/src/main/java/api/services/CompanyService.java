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

    public Page<Company> paginate(CompanyFilterDTO pageable) {
        return this.repository.findAll(
                pageable.getName(),
                pageable.getDescription(),
                pageable.getCity(),
                pageable.getEmail(),
                pageable.getPageable()
        );
    }
}
