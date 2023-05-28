package api.models;

import api.enums.OpportunityType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(schema = "JOB_FILTER", name = "TB_OPPORTUNITIES")
@Entity
public class Opportunity {
    @Id
    @SequenceGenerator(name = "SQ_OPPORTUNITIES", schema = "JOB_FILTER", sequenceName = "SQ_OPPORTUNITIES", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_OPPORTUNITIES")
    @Column(name = "ID_OPPORTUNITY")
    private Long id;

    @Column(name = "NM_OPPORTUNITY")
    private String name;

    @Column(name = "DS_OPPORTUNITY")
    private String description;

    @Column(name = "VL_SALARY")
    private Long salary;

    @Enumerated(EnumType.STRING)
    @Column(name = "TP_OPPORTUNITY")
    private OpportunityType type;

    @ManyToOne
    @JoinColumn(name = "ID_COMPANY")
    private Company company;

    @ManyToMany
    @JoinTable(
            schema = "JOB_FILTER",
            name = "TB_OPPORTUNITY_TAG",
            joinColumns = @JoinColumn(name = "ID_OPPORTUNITY"),
            inverseJoinColumns = @JoinColumn(name = "ID_TAG")
    )
    private List<Tag> tags = new ArrayList<>();
}
