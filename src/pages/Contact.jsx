import React from 'react';

const Contact = () => {
    return (
        <section className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="section-title">聯絡我</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>姓名</label>
                        <input type="text" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '2px solid var(--border-color)',
                            background: 'white',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-body)'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>電子郵件</label>
                        <input type="email" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '2px solid var(--border-color)',
                            background: 'white',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-body)'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>訊息內容</label>
                        <textarea rows="5" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '2px solid var(--border-color)',
                            background: 'white',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-body)'
                        }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '1.2rem' }}>發送訊息</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
