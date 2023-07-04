import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const useBreadcrumb = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const pathnames = location.pathname.split('/').filter((pathname) => pathname !== '');
        const breadcrumbItems = pathnames
            .filter((pathname) => pathname.toLowerCase() !== 'industry') // Exclude "industry" label
            .map((pathname, index) => ({
                path: `/${pathnames.slice(0, index + 1).join('/')}`,
                label: formatLabel(pathname)
            }));
        setBreadcrumbs(breadcrumbItems);
    }, [location]);

    const formatLabel = (label) => {
        const decodedLabel = decodeURIComponent(label);
        const formattedLabel = decodedLabel.replace(/_/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase());
        return formattedLabel;
    };

    return breadcrumbs;
};

export default useBreadcrumb;
