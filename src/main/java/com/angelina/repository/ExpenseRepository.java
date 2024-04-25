package com.angelina.repository;

import com.angelina.domain.Expense;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Expense entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    @Query("select expense from Expense expense where expense.user.login = ?#{authentication.name}")
    List<Expense> findByUserIsCurrentUser();
}
