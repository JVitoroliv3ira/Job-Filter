package api.repositories;

import api.enums.OpportunityType;
import api.models.Opportunity;
import api.models.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OpportunityRepository extends JpaRepository<Opportunity, Long> {

    @Query("""
            SELECT
                O
            FROM
                Opportunity O
            WHERE
                (:name IS NULL OR O.name LIKE %:name%)
                AND (:description IS NULL OR O.description LIKE %:description%)
                AND (:salary IS NULL OR O.salary = :salary)
                AND (:type IS NULL OR O.type = :type)
                AND (:tag IS NULL OR :tag MEMBER OF O.tags)
                AND (:companyName IS NULL OR O.company.name LIKE %:companyName%)
            """)
    Page<Opportunity> search(
            @Param("name") String name,
            @Param("description") String description,
            @Param("salary") Long salary,
            @Param("type") OpportunityType type,
            @Param("tag") Tag tag,
            @Param("companyName") String companyName,
            Pageable pageable);
}
