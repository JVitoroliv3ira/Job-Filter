package api.repositories;

import api.models.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query("""
            SELECT
                C
            FROM
                Company C
            WHERE
                (:name IS NULL OR C.name LIKE %:name%)
                AND (:description IS NULL OR C.description LIKE %:description%)
                AND (:email IS NULL OR C.email LIKE %:email%)
                AND (:city IS NULL OR C.city LIKE %:city%)
            """)
    Page<Company> search(
            @Param("name") String name,
            @Param("description") String description,
            @Param("email") String email,
            @Param("city") String city,
            Pageable pageable
    );
}
