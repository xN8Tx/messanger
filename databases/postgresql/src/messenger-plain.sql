--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-05-24 14:20:14 +07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: n8t
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO n8t;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16419)
-- Name: content; Type: TABLE; Schema: public; Owner: n8t
--

CREATE TABLE public.content (
    id bigint NOT NULL,
    messages character varying
);


ALTER TABLE public.content OWNER TO n8t;

--
-- TOC entry 218 (class 1259 OID 16418)
-- Name: content_id_seq; Type: SEQUENCE; Schema: public; Owner: n8t
--

ALTER TABLE public.content ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.content_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 16403)
-- Name: messages; Type: TABLE; Schema: public; Owner: n8t
--

CREATE TABLE public.messages (
    id bigint NOT NULL,
    "fromID" bigint,
    "toID" bigint,
    "contentID" bigint,
    date date,
    upgradedate date,
    readed boolean
);


ALTER TABLE public.messages OWNER TO n8t;

--
-- TOC entry 216 (class 1259 OID 16402)
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: n8t
--

ALTER TABLE public.messages ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16397)
-- Name: users; Type: TABLE; Schema: public; Owner: n8t
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(50),
    username character varying(25),
    name character varying(50)
);


ALTER TABLE public.users OWNER TO n8t;

--
-- TOC entry 214 (class 1259 OID 16396)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: n8t
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3158 (class 0 OID 16419)
-- Dependencies: 219
-- Data for Name: content; Type: TABLE DATA; Schema: public; Owner: n8t
--

COPY public.content (id, messages) FROM stdin;
\.


--
-- TOC entry 3156 (class 0 OID 16403)
-- Dependencies: 217
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: n8t
--

COPY public.messages (id, "fromID", "toID", "contentID", date, upgradedate, readed) FROM stdin;
\.


--
-- TOC entry 3154 (class 0 OID 16397)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: n8t
--

COPY public.users (id, email, username, name) FROM stdin;
\.


--
-- TOC entry 3164 (class 0 OID 0)
-- Dependencies: 218
-- Name: content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: n8t
--

SELECT pg_catalog.setval('public.content_id_seq', 1, false);


--
-- TOC entry 3165 (class 0 OID 0)
-- Dependencies: 216
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: n8t
--

SELECT pg_catalog.setval('public.messages_id_seq', 1, false);


--
-- TOC entry 3166 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: n8t
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 3007 (class 2606 OID 16425)
-- Name: content content_pkey; Type: CONSTRAINT; Schema: public; Owner: n8t
--

ALTER TABLE ONLY public.content
    ADD CONSTRAINT content_pkey PRIMARY KEY (id);


--
-- TOC entry 3005 (class 2606 OID 16407)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: n8t
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 3003 (class 2606 OID 16401)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: n8t
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3008 (class 2606 OID 16426)
-- Name: messages contentID; Type: FK CONSTRAINT; Schema: public; Owner: n8t
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "contentID" FOREIGN KEY ("contentID") REFERENCES public.content(id) NOT VALID;


--
-- TOC entry 3009 (class 2606 OID 16408)
-- Name: messages fromID; Type: FK CONSTRAINT; Schema: public; Owner: n8t
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "fromID" FOREIGN KEY ("fromID") REFERENCES public.users(id);


--
-- TOC entry 3010 (class 2606 OID 16413)
-- Name: messages toID; Type: FK CONSTRAINT; Schema: public; Owner: n8t
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "toID" FOREIGN KEY ("toID") REFERENCES public.users(id);


--
-- TOC entry 2046 (class 826 OID 16391)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES  TO n8t;


--
-- TOC entry 2048 (class 826 OID 16393)
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES  TO n8t;


--
-- TOC entry 2047 (class 826 OID 16392)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS  TO n8t;


--
-- TOC entry 2045 (class 826 OID 16390)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO n8t;


-- Completed on 2023-05-24 14:20:37 +07

--
-- PostgreSQL database dump complete
--

