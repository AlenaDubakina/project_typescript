import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';

export function BugButton() {
    const { t } = useTranslation('translation');
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onThrow}>{t('ошибка выброса')}</Button>
    );
}

export default BugButton;
