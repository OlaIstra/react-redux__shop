import React from 'react'

import {connect} from 'react-redux'

import { H1, Table, Thead, Tr, TdButtons, P, Div } from './Cart__style'

import { productDelete, productInc, productDec } from '../../../actions/action'

import ButtonIcon from '../../UI/ButtonIcon'
import Button from "../../../components/UI/Button";
import {Link} from "react-router-dom";

const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item
        return (
            <Tr key={idx}>
                <td>{idx+1}</td>
                <td>{title}</td>
                <TdButtons>
                    <ButtonIcon
                        btn='btn btn-outline-info'
                        fontAwesomeClass='fa fa-minus'

                        onClick={() => onDecrease(id)}

                />
                    {count}
                    <ButtonIcon
                        btn='btn btn-outline-info'
                        fontAwesomeClass='fa fa-plus'
                        onClick = {() => onIncrease(id)}
                    />
                </TdButtons>
                <td>{total}</td>
                <td>
                    <ButtonIcon
                        btn='btn btn-outline-danger'
                        fontAwesomeClass='fa fa-trash'
                        onClick = {() => onDelete(id)}
                    />
                </td>
            </Tr>
        )
    }

    return (
        <div>
            <H1>Your order</H1>
            <Table>
                <Thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                </Thead>

                <tbody>
                    {
                        items.map(renderRow)
                    }

                </tbody>
            </Table>
            <P>Total: <span>${total}</span></P>
            <Div>
                <Link to='/home' >
                    <Button primary
                    >
                        Let's go shopping
                    </Button>
                </Link>
            </Div>

        </div>
    )
}

const mapStateToProps = ({shoppingCart: { cartItems }}) => {
    return {
        items: cartItems,
        total: cartItems.reduce((acc, item) => {
            return acc+=item.total
        }, 0)
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(productInc(id)),
        onDecrease: (id) => dispatch(productDec(id)),
        onDelete: (id) => dispatch(productDelete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Cart)
