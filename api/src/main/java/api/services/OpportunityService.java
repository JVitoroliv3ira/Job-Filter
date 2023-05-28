package api.services;

import api.dtos.filters.OpportunityFilterDTO;
import api.models.Opportunity;
import api.repositories.OpportunityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class OpportunityService {

    private final OpportunityRepository opportunityRepository;

    public Page<Opportunity> search(OpportunityFilterDTO filter) {
        return this.opportunityRepository
                .search(
                        filter.getName(),
                        filter.getDescription(),
                        filter.getSalary(),
                        filter.getType(),
                        filter.getTag(),
                        filter.getCompanyName(),
                        filter.getPageable()
                );
    }
}
