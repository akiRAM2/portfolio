import React, { useState, useEffect } from 'react';
import ReactGA from "react-ga4";
import { motion, AnimatePresence } from 'framer-motion';
import { PiXLogo, PiEnvelope, PiSparkle, PiStack, PiCube, PiX, PiFileText, PiArrowSquareOut, PiUsers } from 'react-icons/pi';
import { profile, projects, skills, assets, articles, certifications } from './data';
import './index.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="profile-image">
          <img src="/images/akiram_400x400.jpg" alt="akiRAM" />
        </div>
        <h1 className="hero-title">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="hero-subtitle">
          {profile.role}
        </p>
        <p className="hero-description">
          {profile.description}
        </p>
        <div className="social-links">
          <a href={`https://x.com/${profile.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <PiXLogo size={24} />
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(profile.socials.discord);
              alert('Discord ID をクリップボードにコピーしました！');
            }}
            className="social-icon discord"
            title="クリックしてDiscord IDをコピー"
          >
            <span className="discord-text">Discord: {profile.socials.discord}</span>
          </button>
          <a href={`mailto:${profile.email}`} className="social-icon email">
            <PiEnvelope size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectMedia({ url, title }) {
  if (!url) return <div className="project-media placeholder" />;

  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const isVideoFile = url.endsWith('.mp4') || url.endsWith('.webm');

  return (
    <div className="project-media">
      {isYouTube ? (
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : isVideoFile ? (
        <video
          src={url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img src={url} alt={title} loading="lazy" className="w-full h-full object-cover" />
      )}
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-panel project-card clickable"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <ProjectMedia url={project.thumbnailUrl || project.imageUrl} title={project.title} />
      <div className="project-content">
        <div className="card-header">
          <span className="badge">{project.category}</span>
          <span className="year">{project.year}</span>
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="platform">{project.platform}</p>
        <p className="description line-clamp-3">{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AssetCard({ asset, onClick }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-panel project-card clickable"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <ProjectMedia url={asset.imageUrl} title={asset.title} />
      <div className="project-content">
        <div className="card-header">
          <span className="badge">{asset.category}</span>
          <span className="year">{asset.year}</span>
        </div>
        <h3 className="card-title">{asset.title}</h3>
        <p className="description">{asset.description}</p>
        {asset.tags && (
          <div className="tags">
            {asset.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ArticleCard({ article }) {
  return (
    <motion.div variants={fadeInUp}>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel article-card"
      >
        {article.imageUrl && (
          <div className="article-thumbnail">
            <img src={article.imageUrl} alt={article.title} />
          </div>
        )}
        <div className="article-content">
          <div className="article-header">
            <PiFileText size={20} className="article-icon" />
            <span className="article-platform">{article.platform}</span>
          </div>
          <h3 className="card-title article-title">{article.title}</h3>
          <p className="description line-clamp-2">{article.description}</p>
          <div className="article-link">
            <span>記事を読む</span>
            <PiArrowSquareOut size={16} />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function Modal({ item, onClose }) {
  if (!item) return null;

  // Simple text parser for links, bold text, and YouTube embeds
  const formatText = (text) => {
    if (!text) return "";
    return text.split('\n').map((line, i) => {
      // Check if line contains YouTube embed URL
      const youtubeEmbedMatch = line.match(/https?:\/\/(?:www\.)?youtube\.com\/embed\/([^\s?]+)/);

      if (youtubeEmbedMatch) {
        // Return iframe for YouTube embed
        return (
          <div key={i} className="mb-4">
            <div className="w-full aspect-video bg-slate-100 relative rounded-lg overflow-hidden">
              <iframe
                src={youtubeEmbedMatch[0]}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      }

      // Check if line contains X (Twitter) URL
      const xMatch = line.match(/https?:\/\/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);

      if (xMatch) {
        // Return styled button for X link
        return (
          <div key={i} className="mb-4">
            <a
              href={xMatch[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="x-link-button"
            >
              <PiXLogo size={20} />
              <span>X（Twitter）で見る</span>
              <PiArrowSquareOut size={16} />
            </a>
          </div>
        );
      }

      // Check if line contains image URL
      const imageMatch = line.match(/!\[(.*?)\]\((.*\/images\/[^\s)]+)\)/);

      if (imageMatch) {
        // Return image element
        const altText = imageMatch[1];
        const imageUrl = imageMatch[2];
        return (
          <div key={i} className="mb-4">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        );
      }

      // Bold text: **text**
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Links: [text](url) or just url
      formattedLine = formattedLine.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="link">$1</a>'
      );

      // Standalone URLs (simple detection)
      formattedLine = formattedLine.replace(
        /(https?:\/\/[^\s]+)/g,
        (url) => {
          // Avoid double linking if already linked by above regex (naive check)
          if (formattedLine.includes(`href="${url}"`)) return url;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="link text-blue-500 hover:underline">${url}</a>`;
        }
      );

      return (
        <p key={i} className="mb-4 text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="fixed top-4 right-4 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white rounded-full transition-all z-50 group border border-white/20 shadow-lg hover:scale-110 active:scale-95"
        >
          <PiX size={30} className="group-hover:rotate-90 transition-transform" />
        </button>

        <div className="p-0">
          {item.imageUrl && (
            <div className="w-full aspect-video bg-slate-100 relative">
              {item.imageUrl.includes('youtube.com') || item.imageUrl.includes('youtu.be') ? (
                <iframe
                  src={item.imageUrl}
                  title={item.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (item.imageUrl.endsWith('.mp4') || item.imageUrl.endsWith('.webm')) ? (
                <video
                  src={item.imageUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              )}
            </div>
          )}

          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="badge">{item.category || "Work"}</span>
                {item.year && <span className="text-slate-500 font-medium">{item.year}</span>}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{item.title}</h2>
              {item.platform && <p className="text-violet-600 font-medium">{item.platform}</p>}
            </div>

            <div className="prose prose-slate max-w-none">
              {formatText(item.detail || item.description)}
            </div>

            {item.tags && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full mt-8 py-3 bg-slate-100 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-colors"
            >
              戻る
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Google Analytics Initialization
  useEffect(() => {
    ReactGA.initialize("G-9XE0N4NCVH");
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Track project/asset details view
  useEffect(() => {
    if (selectedItem) {
      ReactGA.event({
        category: selectedItem.category || "Content",
        action: "view_detail",
        label: selectedItem.title,
      });
    }
  }, [selectedItem]);

  return (
    <div className="app-container">
      <div className="container">
        <Hero />

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="section"
        >
          <div className="section-title">
            <PiSparkle className="title-icon" />
            <h2>Selected Projects</h2>
          </div>
          <p className="section-description">
            企画・制作からコミュニティ運営まで、多岐にわたる活動の中から一部を抜粋してご紹介します。
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedItem(project)}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section"
        >
          <div className="section-title">
            <PiCube className="title-icon" />
            <h2>3D Assets & Works</h2>
          </div>
          <p className="section-description">
            VR/ゲーム向け3Dアセットの販売や配布、受託制作を行っています。
          </p>
          <div className="projects-grid">
            {assets.map((asset, index) => (
              <AssetCard
                key={index}
                asset={asset}
                onClick={() => asset.detail && setSelectedItem(asset)}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section"
        >
          <div className="section-title">
            <PiUsers className="title-icon" />
            <h2>Community Events</h2>
          </div>
          <p className="section-description">
            VRプラットフォームを中心に、数多くの小規模イベントの企画と主催を行っています。イベントポスターのデザインも担当。
          </p>
          <motion.div
            variants={fadeInUp}
            className="glass-panel events-card"
          >
            <div className="events-image">
              <img src="/images/events.webp" alt="Community Events" />
            </div>
            <p className="description">
              VRコミュニティの活性化を目指し、定期的にイベントを企画・運営しています。イベントビジュアルの制作から当日の運営まで、幅広く担当しています。
            </p>
            <a
              href="https://note.com/akiram_vr/n/n3842d4981d00"
              target="_blank"
              rel="noopener noreferrer"
              className="events-link"
            >
              <span>活動実績を見る</span>
              <PiArrowSquareOut size={16} />
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section"
        >
          <div className="section-title">
            <PiFileText className="title-icon purple" />
            <h2>Technical Writing</h2>
          </div>
          <p className="section-description">
            VR関係の技術解説や、ソフトやサービスの導入ガイドなど、初心者の方でも迷わない丁寧な解説記事を執筆しています。
          </p>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section"
        >
          <div className="section-title">
            <PiStack className="title-icon purple" />
            <h2>Skills & Expertise</h2>
          </div>
          <p className="section-description">
            ゲームディレクション、3Dアセットやロゴ・UIのデザイン、コミュニティマネジメント、技術ドキュメント執筆など、多岐にわたるスキルセットを保有しています。
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-panel skill-card"
              >
                <skill.icon size={20} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="certifications-subsection">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="certification-item"
                >
                  <span className="cert-name">{cert.name}</span>
                  {cert.score && <span className="cert-detail">{cert.score}</span>}
                  {cert.level && <span className="cert-detail">{cert.level}</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section"
        >
          <div className="section-title">
            <PiEnvelope className="title-icon" />
            <h2>Contact</h2>
          </div>
          <p className="section-description">
            お仕事のご依頼やご相談、コミュニティイベントに関するお問い合わせなど、お気軽にご連絡ください。
          </p>

          <div className="contact-grid">
            <motion.a
              variants={fadeInUp}
              href={`https://x.com/${profile.socials.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel contact-card"
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon-wrapper twitter-bg">
                <PiXLogo size={32} />
              </div>
              <div className="contact-info">
                <h3>X (Twitter)</h3>
                <p>{profile.socials.twitter}</p>
              </div>
              <PiArrowSquareOut size={16} className="contact-arrow" />
            </motion.a>

            <motion.button
              variants={fadeInUp}
              onClick={() => {
                navigator.clipboard.writeText(profile.socials.discord);
                alert('Discord ID をクリップボードにコピーしました！');
              }}
              className="glass-panel contact-card w-full text-left"
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon-wrapper discord-bg">
                <PiUsers size={32} />
              </div>
              <div className="contact-info">
                <h3>Discord</h3>
                <p>{profile.socials.discord}</p>
              </div>
              <span className="text-xs text-slate-400 mt-2 block">Click to Copy</span>
            </motion.button>

            <motion.a
              variants={fadeInUp}
              href={`mailto:${profile.email}`}
              className="glass-panel contact-card"
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon-wrapper email-bg">
                <PiEnvelope size={32} />
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>{profile.email}</p>
              </div>
              <PiArrowSquareOut size={16} className="contact-arrow" />
            </motion.a>
          </div>
        </motion.section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </footer>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
