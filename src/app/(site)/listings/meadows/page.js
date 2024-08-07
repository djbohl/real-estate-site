"use client";

import styles from '../../../styles/apartments.module.css';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import Link from 'next/link'
import AptListing from "../../../components/apt";

const Meadows = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/meadows-data');
                const data = await res.json();
                if (res.ok) {
                    setListings(data.listings); // Update state with fetched listings
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const meadowsData = listings.map((listing) => {
        const imagePath = Array.isArray(listing.images) ? listing.images[0] : "";
        return (
            <AptListing
                key={listing.id}
                title={listing.title}
                image={imagePath}
                price={listing.price}
                date={listing.date_available}
                loc={listing.apt_location}
                locSlug="meadows"
                slug={listing.slug}
                width={100}
                height={200}
            />
        );
    });
    
    return (
        <div className={styles.container}>
            <Link href='/listings'>
                <Button className={styles.btn}>Back</Button>
            </Link>
            <div className={styles.wrapper}>
                <h1 style={{ fontWeight: '200', color: 'var(--brown)' }}>Meadows Apartments</h1>
            </div>
            <div className={styles.aptWrapper}>
                {meadowsData}
            </div>
        </div>
    );
};

export default Meadows;
