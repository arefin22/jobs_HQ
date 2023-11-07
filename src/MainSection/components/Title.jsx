/* eslint-disable react/prop-types */

const Title = ({ props }) => {

    const { title } = props

    return (
        <div>
            {title}
        </div>
    );
};

export default Title;