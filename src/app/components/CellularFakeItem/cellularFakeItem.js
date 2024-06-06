import Styles from "./cellularFakeItem.module.scss";

export default function CellularFakeItem({ cellular }) {
    return (
        <div className={Styles.cellularItem}>
            <div className={Styles.cellularMask}>
            </div>
        </div>
    );
}