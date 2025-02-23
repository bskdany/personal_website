interface ProjectCardProps {
  title: string;
  description: string;
  mediaUrl: string;  // renamed from gifUrl
  githubUrl: string;
}

export const ProjectCard = ({ title, description, mediaUrl, githubUrl }: ProjectCardProps) => {
  return (
    <a 
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-video">
        <video 
          src={mediaUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-gray-700 text-md left-0">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </a>
  );
};
