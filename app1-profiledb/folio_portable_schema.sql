-- GitHired Schema v2.0 | Mario A. Espindola | 2026-05-20
-- Portable PostgreSQL DDL for career data management

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Profile
CREATE TABLE profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    address TEXT,
    summary TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE profile IS 'Personal identity and professional summary.';

-- 2. Work Experience
CREATE TABLE work_experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    employer TEXT NOT NULL,
    title TEXT NOT NULL,
    employment_type TEXT,
    start_date TEXT, -- Using TEXT for flexibility with partial dates
    end_date TEXT,
    location TEXT,
    responsibilities TEXT,
    is_current BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE work_experience IS 'Professional employment history.';

-- 3. Education
CREATE TABLE education (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    institution TEXT NOT NULL,
    credential TEXT NOT NULL,
    field_of_study TEXT,
    start_date TEXT,
    end_date TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE education IS 'Academic history and degrees.';

-- 4. Certifications
CREATE TABLE certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    name TEXT NOT NULL,
    issuer TEXT,
    issue_date TEXT,
    expiry_date TEXT,
    credential_id TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE certifications (id) IS 'Professional certifications and training.';

-- 5. Skills
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    name TEXT NOT NULL,
    category TEXT,
    proficiency_level TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE skills IS 'Technical and professional skills.';

-- 6. Volunteer Experience
CREATE TABLE volunteer_experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    organization TEXT NOT NULL,
    role TEXT,
    start_date TEXT,
    end_date TEXT,
    summary TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE volunteer_experience IS 'Volunteer and community service history.';

-- 7. Projects
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    name TEXT NOT NULL,
    description TEXT,
    role TEXT,
    url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE projects IS 'Specific professional or personal projects.';

-- 8. Applications
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profile(id),
    company TEXT NOT NULL,
    position TEXT NOT NULL,
    status TEXT DEFAULT 'Draft',
    match_score NUMERIC,
    applied_date TIMESTAMPTZ DEFAULT now(),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE applications IS 'Log of job applications and statuses.';
