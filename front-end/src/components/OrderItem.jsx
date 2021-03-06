import { SimpleGrid, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const SELLER_COLUMNS = 5;

function OrderItem({ testIds, orderId, status, date,
  price, address, addressNumber, role }) {
  return (
    <Link to={ `/${role}/orders/${orderId}` }>
      <SimpleGrid
        columns={ role === 'seller' ? SELLER_COLUMNS : SELLER_COLUMNS - 1 }
      >
        <Box>
          <span>Pedido&nbsp;</span>
          <span data-testid={ `${testIds.orderId}${orderId}` }>{ orderId }</span>
        </Box>
        <Box>
          <span data-testid={ `${testIds.status}${orderId}` }>{ status }</span>

        </Box>
        <Box>
          <span data-testid={ `${testIds.date}${orderId}` }>
            { new Date(date)
              .toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }) }
          </span>

        </Box>
        <Box>
          <span data-testid={ `${testIds.price}${orderId}` }>
            {parseFloat(price)
              .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>

        </Box>
        { role === 'seller'
          && (
            <Box>
              <span data-testid={ `${testIds.address}${orderId}` }>
                {`${address}, ${addressNumber}`}
              </span>
            </Box>
          )}
      </SimpleGrid>
    </Link>
  );
}

OrderItem.defaultProps = {
  address: '',
  addressNumber: undefined,
};

OrderItem.propTypes = {
  address: PropTypes.string,
  addressNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  role: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  testIds: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderItem;
