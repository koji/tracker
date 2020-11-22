import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

export const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> tracker</h1>
        </header>
    )
}
