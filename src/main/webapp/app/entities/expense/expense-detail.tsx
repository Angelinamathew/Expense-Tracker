import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './expense.reducer';

export const ExpenseDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const expenseEntity = useAppSelector(state => state.expense.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="expenseDetailsHeading">Expense</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Id</span>
          </dt>
          <dd>{expenseEntity.id}</dd>
          <dt>
            <span id="amount">Amount</span>
          </dt>
          <dd>{expenseEntity.amount}</dd>
          <dt>
            <span id="date">Date</span>
          </dt>
          <dd>{expenseEntity.date ? <TextFormat value={expenseEntity.date} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="notes">Notes</span>
          </dt>
          <dd>{expenseEntity.notes}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>{expenseEntity.createdAt ? <TextFormat value={expenseEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>User</dt>
          <dd>{expenseEntity.user ? expenseEntity.user.id : ''}</dd>
          <dt>Category</dt>
          <dd>{expenseEntity.category ? expenseEntity.category.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/expense" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/expense/${expenseEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ExpenseDetail;
