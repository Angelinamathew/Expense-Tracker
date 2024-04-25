package com.angelina.domain;

import static com.angelina.domain.CategoryTestSamples.*;
import static com.angelina.domain.ExpenseTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.angelina.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ExpenseTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Expense.class);
        Expense expense1 = getExpenseSample1();
        Expense expense2 = new Expense();
        assertThat(expense1).isNotEqualTo(expense2);

        expense2.setId(expense1.getId());
        assertThat(expense1).isEqualTo(expense2);

        expense2 = getExpenseSample2();
        assertThat(expense1).isNotEqualTo(expense2);
    }

    @Test
    void categoryTest() throws Exception {
        Expense expense = getExpenseRandomSampleGenerator();
        Category categoryBack = getCategoryRandomSampleGenerator();

        expense.setCategory(categoryBack);
        assertThat(expense.getCategory()).isEqualTo(categoryBack);

        expense.category(null);
        assertThat(expense.getCategory()).isNull();
    }
}
