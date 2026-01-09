export default function Container({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
            {children}
        </section>
    );
}
