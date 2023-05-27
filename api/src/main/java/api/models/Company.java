package api.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(schema = "JOB_FILTER", name = "TB_COMPANIES")
@Entity
public class Company {
    @Id
    @SequenceGenerator(name = "SQ_COMPANIES", schema = "JOB_FILTER", sequenceName = "SQ_COMPANIES", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_COMPANIES")
    @Column(name = "ID_COMPANY")
    private Long id;

    @Column(name = "NM_COMPANY")
    private String name;

    @Column(name = "DS_COMPANY")
    private String description;

    @Column(name = "EM_COMPANY")
    private String email;

    @Column(name = "CT_COMPANY")
    private String city;
}
