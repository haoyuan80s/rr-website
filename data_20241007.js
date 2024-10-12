
daily_data = {
    "date": "2024-10-07",
    "tweets": [
            {
                "startTime": "00:53",
                "arxivId": "2410.03017",
                "arxivLink": "https://arxiv.org/abs/2410.03017",
                "title": "AI Tutor CoPilot: Giving Even Bad Tutors a Superpower!",
                "institute": "Stanford University",
                "text": "This research introduces Tutor CoPilot, a human-AI system that uses a model of expert thinking to provide real-time guidance to tutors. Unlike previous work that focuses on surface-level language patterns, Tutor CoPilot leverages a method called Bridge to capture the latent reasoning processes that expert educators have honed through years of practice.",
                "paper-title": "Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise",
                "image-path": "flux_paper_image/2410.03017_1728326935.png"
            },

            {
                "startTime": "01:15",
                "arxivId": "2410.02907",
                "arxivLink": "https://arxiv.org/abs/2410.02907",
                "title": "Web Agents Learn by Doing: A New Way to Train Browsers with Synthetic Demonstrations",
                "institute": "Stanford University, ServiceNow",
                "text": "This research introduces NNetnav, a method for training web agents using synthetic demonstrations. Unlike previous work that relies on instruction-first methods, NNetnav generates demonstrations by first interacting with a website and then retroactively labeling the trajectories with instructions.",
                "paper-title": "NNetscape Navigator: Complex Demonstrations for Web Agents Without a Demonstrator",
                "image-path": "flux_paper_image/2410.02907_1728327625.png"
            },

            {
                "startTime": "01:43",
                "arxivId": "2410.03051",
                "arxivLink": "https://arxiv.org/abs/2410.03051",
                "title": "Video Captions Get a Makeover: New Benchmark Makes Them Long and Detailed!",
                "institute": "University of Washington, Pika Lab, Stanford University...",
                "text": "This research introduces a new benchmark for video detailed captioning, called VDC, which features over one thousand videos with significantly longer and more detailed captions than existing benchmarks. It also proposes a novel evaluation metric, VDCSCORE, specifically designed for detailed captioning tasks.",
                "paper-title": "AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark",
                "image-path": "flux_paper_image/2410.03051_1728326538.png"
            },

            {
                "startTime": "02:02",
                "arxivId": "2410.03529",
                "arxivLink": "https://arxiv.org/abs/2410.03529",
                "title": "Chatty Language Models: Talking Less, Learning More!",
                "institute": "EPFL, Apple",
                "text": "This research introduces SMALLTALK LM, a method for training a mixture of language models asynchronously. Unlike previous work, this approach doesn't require high-bandwidth communication between the nodes training each model, making it more efficient and scalable.",
                "paper-title": "No Need to Talk: Asynchronous Mixture of Language Models",
                "image-path": "flux_paper_image/2410.03529_1728344299.png"
            },

            {
                "startTime": "02:26",
                "arxivId": "2410.03654",
                "arxivLink": "https://arxiv.org/abs/2410.03654",
                "title": "Humanoid Robots Learn to Hike: From Flat Ground to Mountain Trails!",
                "institute": "University of California Berkeley",
                "text": "This research introduces a two-step training procedure for humanoid locomotion. The model is first pre-trained on flat-ground trajectories using sequence modeling, then fine-tuned on uneven terrain using reinforcement learning. This approach differs from previous work by leveraging pre-training to improve sample efficiency and generalization to challenging terrains.",
                "paper-title": "Learning Humanoid Locomotion over Challenging Terrain",
                "image-path": "flux_paper_image/2410.03654_1728343537.png"
            },

            {
                "startTime": "02:47",
                "arxivId": "2410.03006",
                "arxivLink": "https://arxiv.org/abs/2410.03006",
                "title": "Neural Networks: They're Not Just Black Boxes, They're Aligned!",
                "institute": "Massachusetts Institute of Technology, Texas A&M University, NTT Research",
                "text": "This research proposes the Canonical Representation Hypothesis (CRH), which posits that neural networks align their representations with weights and gradients during training. This differs from previous work by providing a unifying framework for understanding representation formation across various tasks and architectures.",
                "paper-title": "Formation of Representations in Neural Networks",
                "image-path": "flux_paper_image/2410.03006_1728327297.png"
            },

            {
                "startTime": "03:12",
                "arxivId": "2410.02879",
                "arxivLink": "https://arxiv.org/abs/2410.02879",
                "title": "LLM Unlearning Benchmarks: A Case of \"Forget Me Not\"",
                "institute": "CMU",
                "text": "This research examines the limitations of existing benchmarks used to evaluate unlearning methods in large language models (LLMs). The authors demonstrate that these benchmarks can be easily manipulated, leading to misleading results about the effectiveness of unlearning algorithms.",
                "paper-title": "Position: LLM Unlearning Benchmarks are Weak Measures of Progress",
                "image-path": "flux_paper_image/2410.02879_1728326180.png"
            },

            {
                "startTime": "03:34",
                "arxivId": "2410.03665",
                "arxivLink": "https://arxiv.org/abs/2410.03665",
                "title": "From Head to Toe: How Your Glasses Can Track Your Every Move",
                "institute": "UC Berkeley, UT Austin",
                "text": "This research introduces EgoAllo, a system that estimates human body pose, height, and hand parameters using only egocentric SLAM poses and images. Unlike previous work that focuses on body pose, EgoAllo incorporates hand parameters and uses a novel invariant conditioning parameterization for the diffusion model.",
                "paper-title": "Estimating Body and Hand Motion in an Ego-sensed World",
                "image-path": "flux_paper_image/2410.03665_1728343553.png"
            },

            {
                "startTime": "03:57",
                "arxivId": "2410.03608",
                "arxivLink": "https://arxiv.org/abs/2410.03608",
                "title": "LLMs Get a Checklist: Evaluating and Improving Language Models with Ticking Boxes",
                "institute": "University of Oxford",
                "text": "This research introduces TICK, a novel evaluation protocol for LLMs that uses LLM-generated checklists to decompose instructions into a series of YES/NO questions. This approach differs from previous work by automating checklist creation and providing a more interpretable and granular evaluation.",
                "paper-title": "TICKing All the Boxes: Generated Checklists Improve LLM Evaluation and Generation",
                "image-path": "flux_paper_image/2410.03608_1728343418.png"
            },

            {
                "startTime": "04:22",
                "arxivId": "2410.03145",
                "arxivLink": "https://arxiv.org/abs/2410.03145",
                "title": "LLMs Get a Taste of Fine Dining: Margin Matching for Better AI Palates",
                "institute": "KAIST, UC Berkeley",
                "text": "This research introduces Margin Matching Preference Optimization (MMPO), a method that incorporates granular feedback signals into the optimization process for large language models (LLMs). Unlike previous methods that rely on simple binary labels, MMPO utilizes the relative quality margin between output pairs, allowing models to capture subtle preferences in the feedback data.",
                "paper-title": "Margin Matching Preference Optimization: Enhanced Model Alignment with Granular Feedback",
                "image-path": "flux_paper_image/2410.03145_1728326843.png"
            },

            {
                "startTime": "04:46",
                "arxivId": "2410.02817",
                "arxivLink": "https://arxiv.org/abs/2410.02817",
                "title": "Deep Learning's New Trick: Forecasting Capacity Costs for Inventory Management",
                "institute": "Amazon, Google, Harvard University",
                "text": "This research introduces a novel \"neural coordinator\" that forecasts capacity costs, eliminating the need for traditional model predictive control and its limitations in complex, deep reinforcement learning settings.",
                "paper-title": "Neural Coordination and Capacity Control for Inventory Management",
                "image-path": "flux_paper_image/2410.02817_1728327472.png"
            },

            {
                "startTime": "05:05",
                "arxivId": "2410.03380",
                "arxivLink": "https://arxiv.org/abs/2410.03380",
                "title": "Causal Detective: Unmasking Perturbation Targets with a Graph-Based Sleuth",
                "institute": "MIT",
                "text": "This research proposes a novel approach called Causal Differential Networks (CDN) for predicting perturbation targets. Unlike previous methods that rely on external knowledge graphs, CDN infers causal structures directly from the data, using an amortized causal discovery model.",
                "paper-title": "Predicting perturbation targets with causal differential networks",
                "image-path": "flux_paper_image/2410.03380_1728344184.png"
            },

            {
                "startTime": "05:26",
                "arxivId": "2410.03224",
                "arxivLink": "https://arxiv.org/abs/2410.03224",
                "title": "Scriptwriters, Get Visual: New Tool Turns Words into Movie Scenes!",
                "institute": "Stanford University",
                "text": "This research introduces ScriptViz, a tool that helps scriptwriters visualize their scenes by retrieving relevant imagery from a large movie database. Unlike previous work that focuses on generating images or providing general visual references, ScriptViz specifically aligns visuals with the script's dialogue, offering a more immersive and interactive experience.",
                "paper-title": "ScriptViz: A Visualization Tool to Aid Scriptwriting based on a Large Movie Database",
                "image-path": "flux_paper_image/2410.03224_1728343560.png"
            },

            {
                "startTime": "05:42",
                "arxivId": "2410.03032",
                "arxivLink": "https://arxiv.org/abs/2410.03032",
                "title": "AI Writing Partner Helps You Fight Online Hate Speech",
                "institute": "Virginia Tech, IBM",
                "text": "This research introduces CounterQuill, an AI-mediated system that assists users in composing effective and empathetic counterspeech. Unlike previous work that focuses solely on AI-generated counterspeech, CounterQuill emphasizes human-AI collaboration, allowing users to maintain ownership over their responses.",
                "paper-title": "CounterQuill: Investigating the Potential of Human-AI Collaboration in Online Counterspeech Writing",
                "image-path": "flux_paper_image/2410.03032_1728327605.png"
            },

            {
                "startTime": "06:03",
                "arxivId": "2410.03055",
                "arxivLink": "https://arxiv.org/abs/2410.03055",
                "title": "LLMs: Stop Being So Paranoid! Permissive Label Propagation to the Rescue!",
                "institute": "University of Cambridge, Microsoft",
                "text": "This research proposes a new approach to information-flow label propagation for LLMs that propagates only the labels of influential inputs, unlike traditional methods that propagate the most restrictive label.",
                "paper-title": "Permissive Information-Flow Analysis for Large Language Models",
                "image-path": "flux_paper_image/2410.03055_1728327065.png"
            },

            {
                "startTime": "06:25",
                "arxivId": "2410.03111",
                "arxivLink": "https://arxiv.org/abs/2410.03111",
                "title": "LLMs on a Diet: Low-Rank Compression for Smaller, Smarter Language Models",
                "institute": "Georgia Institute of Technology, Microsoft",
                "text": "This paper proposes a novel approach to compressing the KV cache in LLMs by applying low-rank approximation to the weight matrices, rather than relying on token eviction strategies or model retraining.",
                "paper-title": "LoRC: Low-Rank Compression for LLMs KV Cache with a Progressive Compression Strategy",
                "image-path": "flux_paper_image/2410.03111_1728327129.png"
            },

            {
                "startTime": "06:42",
                "arxivId": "2410.03634",
                "arxivLink": "https://arxiv.org/abs/2410.03634",
                "title": "Enzyme Design: A New Recipe for Protein Generation!",
                "institute": "Caltech",
                "text": "This research introduces a new method called \"Conditional Adapters\" for finetuning protein language models. Unlike previous approaches like \"Prompting,\" which rely on tokenized conditioning, Conditional Adapters use continuous representations, allowing for more flexible and generalizable protein generation.",
                "paper-title": "Conditional Enzyme Generation Using Protein Language Models with Adapters",
                "image-path": "flux_paper_image/2410.03634_1728343371.png"
            },

            {
                "startTime": "07:03",
                "arxivId": "2410.03424",
                "arxivLink": "https://arxiv.org/abs/2410.03424",
                "title": "Cayley Graph Propagation: A New Way to Stop GNNs from Getting Squashed!",
                "institute": "Tel Aviv University, Google",
                "text": "This paper proposes a new method called Cayley Graph Propagation (CGP) that uses the complete Cayley graph structure to improve information flow in graph neural networks (GNNs). Unlike previous work that truncated the Cayley graph, CGP retains all nodes, ensuring a bottleneck-free structure.",
                "paper-title": "Cayley Graph Propagation",
                "image-path": "flux_paper_image/2410.03424_1728343171.png"
            },

            {
                "startTime": "07:36",
                "arxivId": "2410.02831",
                "arxivLink": "https://arxiv.org/abs/2410.02831",
                "title": "CS:GO Skill Ratings: Elo Hell, But Make It Science",
                "institute": "University of Cambridge",
                "text": "This research analyzes the performance of different skill rating systems in CS:GO by simulating matchmaking and training the systems on a large dataset of professional matches. Unlike previous work, this study focuses on the dynamic interaction between skill ratings and matchmaking algorithms, rather than analyzing static datasets.",
                "paper-title": "Skill Issues: An Analysis of CS:GO Skill Rating Systems",
                "image-path": "flux_paper_image/2410.02831_1728326501.png"
            },

            {
                "startTime": "08:06",
                "arxivId": "2410.03494",
                "arxivLink": "https://arxiv.org/abs/2410.03494",
                "title": "AI Makes Molecules: SynFormer Designs Drugs That Can Actually Be Made!",
                "institute": "MIT",
                "text": "This research introduces SynFormer, a generative AI model that designs molecules by creating synthetic pathways, ensuring the molecules are actually synthesizable. Unlike previous models that focused on generating molecular structures, SynFormer prioritizes the creation of feasible synthesis routes.",
                "paper-title": "Generative Artificial Intelligence for Navigating Synthesizable Chemical Space",
                "image-path": "flux_paper_image/2410.03494_1728343906.png"
            },

            {
                "startTime": "08:32",
                "arxivId": "2410.03140",
                "arxivLink": "https://arxiv.org/abs/2410.03140",
                "title": "In-Context Learning: When AI Gets Tricked by Fake Clues!",
                "institute": "Google Research, YerevaNN, Yerevan State University",
                "text": "This research explores the limitations of in-context learning in the presence of spurious correlations, where features are predictive of the label but not causally related. Unlike previous work focusing on regression tasks, this study investigates classification tasks with spurious features, demonstrating that conventional in-context learning approaches are susceptible to these correlations and can lead to task memorization.",
                "paper-title": "In-context Learning in Presence of Spurious Correlations",
                "image-path": "flux_paper_image/2410.03140_1728326440.png"
            },

            {
                "startTime": "09:00",
                "arxivId": "2410.03170",
                "arxivLink": "https://arxiv.org/abs/2410.03170",
                "title": "Your AI is a Computer Now: Language Models are Turing Complete!",
                "institute": "Google DeepMind, University of Alberta",
                "text": "This paper demonstrates that a large language model can simulate a universal Turing machine without any external intervention or modification of the model's weights. This is different from previous work that either augmented the model with external memory or focused on the theoretical expressiveness of architectures without considering learnability.",
                "paper-title": "Autoregressive Large Language Models are Computationally Universal",
                "image-path": "flux_paper_image/2410.03170_1728343798.png"
            },

            {
                "startTime": "09:25",
                "arxivId": "2410.03364",
                "arxivLink": "https://arxiv.org/abs/2410.03364",
                "title": "One Transformer to Rule Them All: Decoding Error Correction Codes with a Unified Approach",
                "institute": "Tsinghua University",
                "text": "This research proposes a unified Transformer-based decoding architecture that can handle multiple linear block codes, including Polar, LDPC, and BCH, within a single framework. This differs from previous work that typically required separate decoders for each code type.",
                "paper-title": "Error Correction Code Transformer: From Non-Unified to Unified",
                "image-path": "flux_paper_image/2410.03364_1728343344.png"
            },

            {
                "startTime": "09:48",
                "arxivId": "2410.03617",
                "arxivLink": "https://arxiv.org/abs/2410.03617",
                "title": "Model Merging: Bigger is Better, But How Big is Too Big?",
                "institute": "The University of North Carolina at Chapel Hill, Google, Virginia Tech",
                "text": "This research investigates the effectiveness of model merging at scale, examining the impact of model size, base model quality, and the number of expert models on both held-in and zero-shot generalization performance. Previous studies have primarily focused on merging a few small models, leaving many unanswered questions about the effect of scaling model size.",
                "paper-title": "What Matters for Model Merging at Scale?",
                "image-path": "flux_paper_image/2410.03617_1728343509.png"
            },

            {
                "startTime": "10:13",
                "arxivId": "2410.03537",
                "arxivLink": "https://arxiv.org/abs/2410.03537",
                "title": "LLMs Got Watermarks: How to Catch Data Thieves in the Wild West of AI",
                "institute": "ETH Zurich",
                "text": "This research introduces a new method for detecting unauthorized data usage in Retrieval-Augmented Generation (RAG) systems. Unlike previous work that focuses on membership inference attacks, this paper proposes a proactive approach using LLM watermarks to provide statistical guarantees for data ownership.",
                "paper-title": "Ward: Provable RAG Dataset Inference via LLM Watermarks",
                "image-path": "flux_paper_image/2410.03537_1728343752.png"
            },

            {
                "startTime": "10:32",
                "arxivId": "2410.03156",
                "arxivLink": "https://arxiv.org/abs/2410.03156",
                "title": "MELODI: Memory Compression for Long Documents, It's Like a Brain for AI!",
                "institute": "Google",
                "text": "MELODI introduces a hierarchical memory compression scheme that combines short-term and long-term memory within a transformer model. This differs from previous approaches that primarily focus on either short-term or long-term memory.",
                "paper-title": "MELODI: Exploring Memory Compression for Long Contexts",
                "image-path": "flux_paper_image/2410.03156_1728325831.png"
            },

            {
                "startTime": "10:52",
                "arxivId": "2410.03341",
                "arxivLink": "https://arxiv.org/abs/2410.03341",
                "title": "Fact-Checking with a Side of Logic: Zero-Shot Fact Verification Using LLMs",
                "institute": "University of Cambridge",
                "text": "This research proposes a zero-shot fact verification method that utilizes instruction-tuned large language models (LLMs) to generate natural logic proofs without requiring training data annotated with natural logic. This approach differs from previous work that relied on large amounts of annotated data.",
                "paper-title": "Zero-Shot Fact Verification via Natural Logic and Large Language Models",
                "image-path": "flux_paper_image/2410.03341_1728343069.png"
            },

            {
                "startTime": "11:13",
                "arxivId": "2410.02902",
                "arxivLink": "https://arxiv.org/abs/2410.02902",
                "title": "LLMs as Judges: How to Train AI to Follow Instructions Better Than Ever!",
                "institute": "CMU",
                "text": "This research explores using large language models (LLMs) as \"judges\" to evaluate and improve the instruction-following abilities of other LLMs. The key innovation is the use of Minimum Bayes Risk (MBR) decoding, which leverages the judge LLM to select the best output from a set of candidate outputs. This differs from previous work that primarily focused on using LLMs for reference-free evaluation.",
                "paper-title": "Better Instruction-Following Through Minimum Bayes Risk",
                "image-path": "flux_paper_image/2410.02902_1728328103.png"
            },

            {
                "startTime": "11:39",
                "arxivId": "2410.02833",
                "arxivLink": "https://arxiv.org/abs/2410.02833",
                "title": "Entropy's Got a Twin: The Surprising Asymmetry of ERM Regularization",
                "institute": "University of Sheffield, French Institute for Research in Computer Science and Automation, Princeton University",
                "text": "This paper explores the Type-II ERM-RER problem, which uses the relative entropy of the reference measure with respect to the optimization measure, unlike the more common Type-I ERM-RER. It provides a solution to this problem and analyzes its properties, highlighting the impact of entropy asymmetry on the solution's support.",
                "paper-title": "Asymmetry of the Relative Entropy in the Regularization of Empirical Risk Minimization",
                "image-path": "flux_paper_image/2410.02833_1728326477.png"
            },

            {
                "startTime": "12:02",
                "arxivId": "2410.03131",
                "arxivLink": "https://arxiv.org/abs/2410.03131",
                "title": "AI Gets a Second Opinion: Multiple Evaluators Boost Code Generation",
                "institute": "University of Maryland, U.S. Army Research Laboratory, Princeton University...",
                "text": "This research proposes a novel approach to AI system optimization by utilizing multiple LLMs as evaluators, each focusing on a specific criterion, instead of relying on a single LLM to evaluate multiple criteria simultaneously. This approach is distinct from previous work that primarily focused on single-evaluator methods.",
                "paper-title": "AIME: AI System Optimization via Multiple LLM Evaluators",
                "image-path": "flux_paper_image/2410.03131_1728326315.png"
            },

            {
                "startTime": "12:28",
                "arxivId": "2410.03601",
                "arxivLink": "https://arxiv.org/abs/2410.03601",
                "title": "Discrete Diffusion Models: Bridging the Gap Between Continuous and Discrete Worlds",
                "institute": "Stanford University",
                "text": "This research introduces a new framework for analyzing discrete diffusion models using L\u00e9vy-type stochastic integrals, which is different from previous work that relied on Markov chain-based analysis.",
                "paper-title": "How Discrete and Continuous Diffusion Meet: Comprehensive Analysis of Discrete Diffusion Models via a Stochastic Integral Framework",
                "image-path": "flux_paper_image/2410.03601_1728342705.png"
            },

            {
                "startTime": "12:48",
                "arxivId": "2410.03517",
                "arxivLink": "https://arxiv.org/abs/2410.03517",
                "title": "Graph Neural Networks: Counting Homomorphisms with a Pebble Game Twist!",
                "institute": "Peking University",
                "text": "This paper introduces a generalized framework for analyzing the expressive power of graph neural networks (GNNs) by examining their ability to count homomorphisms. It extends previous work by providing a unified characterization of a much larger family of algorithms using pebble games.",
                "paper-title": "Fine-Grained Expressive Power of Weisfeiler-Leman: A Homomorphism Counting Perspective",
                "image-path": "flux_paper_image/2410.03517_1728344050.png"
            },

            {
                "startTime": "13:12",
                "arxivId": "2410.03007",
                "arxivLink": "https://arxiv.org/abs/2410.03007",
                "title": "Speech Models on a Diet: FastAdaSP Makes Large Language Models Slim and Speedy!",
                "institute": "CMU, Nvidia",
                "text": "This research focuses on making large speech language models (SpeechLMs) more efficient by reducing the number of audio tokens processed during inference. Unlike previous work that focused on specific tasks like automatic speech recognition (ASR), FastAdaSP is designed for a wider range of speech tasks, including both dense and sparse tasks.",
                "paper-title": "FastAdaSP: Multitask-Adapted Efficient Inference for Large Speech Language Model",
                "image-path": "flux_paper_image/2410.03007_1728326093.png"
            },

            {
                "startTime": "13:35",
                "arxivId": "2410.03655",
                "arxivLink": "https://arxiv.org/abs/2410.03655",
                "title": "Molecule Generation Gets a Geometric Makeover: New Framework Improves Drug Design!",
                "institute": "Peking University",
                "text": "This paper introduces GeoRCG, a framework that improves molecule generation by first generating a geometric representation of the molecule and then using that representation to guide the generation process. This differs from previous work that directly generates molecules, often leading to lower quality results.",
                "paper-title": "Geometric Representation Condition Improves Equivariant Molecule Generation",
                "image-path": "flux_paper_image/2410.03655_1728343359.png"
            },

            {
                "startTime": "13:56",
                "arxivId": "2410.02847",
                "arxivLink": "https://arxiv.org/abs/2410.02847",
                "title": "Deep Signature: Unraveling Protein Dynamics with a Mathematical Twist!",
                "institute": "City University of Hong Kong, University of Oxford",
                "text": "This research introduces Deep Signature, a novel framework that uses a combination of soft spectral clustering and signature transform to analyze complex protein dynamics. Unlike previous methods that rely on simplified setups or coarse-grained dynamics, Deep Signature directly tackles the intricate interatomic interactions in large-scale molecular systems.",
                "paper-title": "Deep Signature: Characterization of Large-Scale Molecular Dynamics",
                "image-path": "flux_paper_image/2410.02847_1728327561.png"
            },

            {
                "startTime": "14:25",
                "arxivId": "2410.03124",
                "arxivLink": "https://arxiv.org/abs/2410.03124",
                "title": "Unsupervised Prompt Learning: Teaching LLMs with No Labels!",
                "institute": "RIKEN, Northeastern University, University of North Carolina at Chapel Hill...",
                "text": "This research proposes a novel unsupervised prompt learning method for classification with black-box LLMs. Unlike previous methods that require labeled data, this approach simultaneously learns the prompt and pseudo labels for unlabeled data, leveraging the in-context learning capabilities of LLMs.",
                "paper-title": "On Unsupervised Prompt Learning for Classification with Black-box Language Models",
                "image-path": "flux_paper_image/2410.03124_1728327755.png"
            },

            {
                "startTime": "14:50",
                "arxivId": "2410.03351",
                "arxivLink": "https://arxiv.org/abs/2410.03351",
                "title": "Code's Inner Thoughts: LLMs Reflect on Code to Generate Equivalent Representations",
                "institute": "Peking University",
                "text": "This research proposes a self-reflection approach for generating equivalent representations (ERs) of code using two large language models (LLMs). Unlike previous work that focuses on specific tasks, this approach is general and unsupervised, allowing it to handle various software engineering tasks by applying different constraints.",
                "paper-title": "Generating Equivalent Representations of Code By A Self-Reflection Approach",
                "image-path": "flux_paper_image/2410.03351_1728343024.png"
            },

            {
                "startTime": "15:15",
                "arxivId": "2410.03234",
                "arxivLink": "https://arxiv.org/abs/2410.03234",
                "title": "LLMs: Code Wizards or Code Blunders? HonestCoder Knows!",
                "institute": "Peking University, Academy of Military Sciences",
                "text": "This research proposes HonestCoder, a novel approach to code generation that selectively shows developers LLM-generated code based on the model's confidence. Unlike previous methods that indiscriminately display all generated code, HonestCoder aims to filter out potentially erroneous programs.",
                "paper-title": "Showing LLM-Generated Code Selectively Based on Confidence of LLMs",
                "image-path": "flux_paper_image/2410.03234_1728344077.png"
            },

            {
                "startTime": "15:40",
                "arxivId": "2410.03284",
                "arxivLink": "https://arxiv.org/abs/2410.03284",
                "title": "Parameter-Free Bandits: A Heavy-Tailed Algorithm That's Got Your Back!",
                "institute": "Tsinghua University, MIT",
                "text": "This paper introduces a new algorithm, uniINF, for the Heavy-Tailed Multi-Armed Bandits (HTMAB) problem. Unlike previous work, uniINF operates without needing to know the heavy-tail parameters (\u03c3, \u03b1) beforehand, making it more adaptable to real-world scenarios.",
                "paper-title": "uniINF: Best-of-Both-Worlds Algorithm for Parameter-Free Heavy-Tailed MABs",
                "image-path": "flux_paper_image/2410.03284_1728344321.png"
            },

            {
                "startTime": "16:02",
                "arxivId": "2410.03440",
                "arxivLink": "https://arxiv.org/abs/2410.03440",
                "title": "Pre-trained Transformers: Sparsity is the New Black!",
                "institute": "Tsinghua University",
                "text": "This research explores the potential of sparse activation during the pre-training phase of Transformers, unlike previous work that focused on post-training methods. The paper proposes a novel Switchable Sparse-Dense Learning (SSD) approach that adaptively switches between dense and sparse training modes, leveraging the efficiency of sparse training while avoiding the static activation correlation issues.",
                "paper-title": "Exploring the Benefit of Activation Sparsity in Pre-training",
                "image-path": "flux_paper_image/2410.03440_1728343706.png"
            },

            {
                "startTime": "16:26",
                "arxivId": "2410.03474",
                "arxivLink": "https://arxiv.org/abs/2410.03474",
                "title": "Peer Review Gets a Fair Shake: New Algorithm Prevents Conference Breakups",
                "institute": "University of New South Wales, University of Toronto",
                "text": "This paper introduces the concept of \"core\" as a group fairness notion in peer review. Unlike previous work focusing on individual fairness or predefined groups, this approach ensures that no community can unilaterally benefit by withdrawing from a large conference.",
                "paper-title": "Group Fairness in Peer Review",
                "image-path": "flux_paper_image/2410.03474_1728342744.png"
            },

            {
                "startTime": "16:45",
                "arxivId": "2410.03602",
                "arxivLink": "https://arxiv.org/abs/2410.03602",
                "title": "Gauge-Fixing Gets a Gradient Makeover: Optimizing Lattice Fields with a Soft Touch",
                "institute": "Massachusetts Institute of Technology, University of Bern, University of Edinburgh...",
                "text": "This research introduces a differentiable parameterization of gauge fixing, allowing for gradient-based optimization of gauge-fixing schemes. This approach differs from previous methods that relied on functional minimization or discrete tree selection.",
                "paper-title": "Exploring gauge-fixing conditions with gradient-based optimization",
                "image-path": "flux_paper_image/2410.03602_1728343517.png"
            },

            {
                "startTime": "17:11",
                "arxivId": "2410.03074",
                "arxivLink": "https://arxiv.org/abs/2410.03074",
                "title": "MetaOOD: Picking the Right OOD Detector Without Breaking a Sweat!",
                "institute": "University of Southern California, University of Chicago, CMU",
                "text": "This research introduces MetaOOD, a novel unsupervised framework for automatically selecting an out-of-distribution (OOD) detection model. Unlike previous methods that rely on labeled data or heuristics, MetaOOD leverages meta-learning and language model-based embeddings to predict model performance on new datasets without requiring any evaluation.",
                "paper-title": "MetaOOD: Automatic Selection of OOD Detection Models",
                "image-path": "flux_paper_image/2410.03074_1728327455.png"
            },

            {
                "startTime": "17:36",
                "arxivId": "2410.03489",
                "arxivLink": "https://arxiv.org/abs/2410.03489",
                "title": "Jailbreaking Vision-Language Models: When Images Become the Weapon of Choice",
                "institute": "ETH Zurich",
                "text": "This research introduces the concept of a \"tokenizer shortcut,\" a differentiable function that approximates the non-differentiable image tokenization process used in multimodal fusion models. This allows for continuous optimization of adversarial images, enabling more effective jailbreak attacks.",
                "paper-title": "Gradient-based Jailbreak Images for Multimodal Fusion Models",
                "image-path": "flux_paper_image/2410.03489_1728342845.png"
            },

            {
                "startTime": "17:59",
                "arxivId": "2410.03001",
                "arxivLink": "https://arxiv.org/abs/2410.03001",
                "title": "Can Transformers Learn Like a Grammar School Kid?",
                "institute": "ETH Zurich",
                "text": "This research investigates the ability of transformers to learn n-gram language models, focusing on the impact of parameter sharing in the ground-truth model on the transformer's ability to learn it well. It compares the performance of transformers to that of classical n-gram estimation techniques and hand-crafted baselines.",
                "paper-title": "Can Transformers Learn $n$-gram Language Models?",
                "image-path": "flux_paper_image/2410.03001_1728328084.png"
            },

            {
                "startTime": "18:25",
                "arxivId": "2410.03524",
                "arxivLink": "https://arxiv.org/abs/2410.03524",
                "title": "LLMs: Code or Text? The Big Debate Gets Even More Complicated!",
                "institute": "Harvard University, Microsoft, MIT",
                "text": "This research delves into the effectiveness of LLMs in choosing between code generation and textual reasoning for solving tasks. It goes beyond simply prompting LLMs to use code and explores the impact of task complexity and model size on their decision-making.",
                "paper-title": "Steering Large Language Models between Code Execution and Textual Reasoning",
                "image-path": "flux_paper_image/2410.03524_1728343631.png"
            },

            {
                "startTime": "18:49",
                "arxivId": "2410.03456",
                "arxivLink": "https://arxiv.org/abs/2410.03456",
                "title": "Diffusion Models Get a Dynamic Makeover: Less Computing, Same Great Images!",
                "institute": "National University of Singapore, DAMO Academy Alibaba Group, Hupan Lab...",
                "text": "This research proposes a Dynamic Diffusion Transformer (DyDiT) that dynamically adjusts its computational resources during image generation, unlike previous static approaches. DyDiT adapts its model width based on the timestep and identifies image patches where noise prediction is easier, bypassing computationally intensive blocks.",
                "paper-title": "Dynamic Diffusion Transformer",
                "image-path": "flux_paper_image/2410.03456_1728342683.png"
            },

            {
                "startTime": "19:14",
                "arxivId": "2410.03083",
                "arxivLink": "https://arxiv.org/abs/2410.03083",
                "title": "Scaling Up Language Models: It's Not Just About Size, It's About Quality!",
                "institute": "Meta, Iowa State University, Virginia Tech",
                "text": "This research extends the traditional scaling law in language modeling by incorporating the concept of \"effective training tokens,\" which considers data quality alongside quantity. This approach emphasizes the importance of data quality, particularly for models with constrained parameters.",
                "paper-title": "Scaling Parameter-Constrained Language Models with Quality Data",
                "image-path": "flux_paper_image/2410.03083_1728327211.png"
            },

            {
                "startTime": "19:36",
                "arxivId": "2410.03461",
                "arxivLink": "https://arxiv.org/abs/2410.03461",
                "title": "Tired of LLMs Hallucinating? This New Trick Makes Them More Truthful!",
                "institute": "University of T\u00fcbingen, MIT, Amazon",
                "text": "This research introduces a novel unsupervised domain adaptation framework called Auto-GDA. Unlike previous methods that rely on handcrafted filtering and augmentation strategies, Auto-GDA uses an iterative process to continuously improve the quality of generated samples using weak labels from less efficient teacher models and discrete optimization to select the most promising augmented samples.",
                "paper-title": "Auto-GDA: Automatic Domain Adaptation for Efficient Grounding Verification in Retrieval Augmented Generation",
                "image-path": "flux_paper_image/2410.03461_1728344255.png"
            },

            {
                "startTime": "20:00",
                "arxivId": "2410.03478",
                "arxivLink": "https://arxiv.org/abs/2410.03478",
                "title": "Predicting the Future of Videos: A Diffusion Transformer's Tale",
                "institute": "University of North Carolina at Chapel Hill, Meta",
                "text": "This research proposes a new framework called VEDIT, which uses a diffusion transformer to predict video representations without requiring extensive pretraining or additional language supervision. Unlike previous methods that rely on large-scale pretraining and text annotations, VEDIT leverages strong pre-trained visual encoders and operates directly in the latent embedding space.",
                "paper-title": "VEDIT: Latent Prediction Architecture For Procedural Video Representation Learning",
                "image-path": "flux_paper_image/2410.03478_1728342874.png"
            },

            {
                "startTime": "20:24",
                "arxivId": "2410.03115",
                "arxivLink": "https://arxiv.org/abs/2410.03115",
                "title": "Multilingual Translation: 50 Languages, No Curse!",
                "institute": "Johns Hopkins University, Microsoft",
                "text": "This research introduces X-ALMA, a multilingual translation model that uses language-specific modules to prevent negative interference between languages during training. This approach differs from previous work that often suffers from performance degradation when scaling to a large number of languages.",
                "paper-title": "X-ALMA: Plug&Play Modules and Adaptive Rejection for Quality Translation at Scale",
                "image-path": "flux_paper_image/2410.03115_1728327398.png"
            },

            {
                "startTime": "20:45",
                "arxivId": "2410.03187",
                "arxivLink": "https://arxiv.org/abs/2410.03187",
                "title": "Text-to-Motion: Making Virtual Characters Dance to Your Words!",
                "institute": "Peking University, Beijing University of Posts and Telecommunications, National Key Lab of General AI BIGAI",
                "text": "This research introduces a novel framework that synthesizes multi-stage human motions directly from text instructions and goal locations, eliminating the need for user-defined waypoints and stage transitions. This differs from previous work that often relies on additional inputs like object trajectories or keypoints.",
                "paper-title": "Autonomous Character-Scene Interaction Synthesis from Text Instruction",
                "image-path": "flux_paper_image/2410.03187_1728343060.png"
            },

            {
                "startTime": "21:12",
                "arxivId": "2410.03052",
                "arxivLink": "https://arxiv.org/abs/2410.03052",
                "title": "Embracing the Multi-Modal World: Optimal Transport Makes Class Hierarchies Sing!",
                "institute": "University of Illinois, Stanford University, Okinawa Institute of Science and Technology Graduate University",
                "text": "This research proposes a new way to embed structured knowledge into feature representations by using Optimal Transport (OT) distances instead of the traditional Euclidean distance between class means. This approach addresses the limitation of previous work that relied on class means, which may not accurately represent multi-modal class distributions.",
                "paper-title": "Learning Structured Representations by Embedding Class Hierarchy with Fast Optimal Transport",
                "image-path": "flux_paper_image/2410.03052_1728326760.png"
            },

            {
                "startTime": "21:32",
                "arxivId": "2410.02857",
                "arxivLink": "https://arxiv.org/abs/2410.02857",
                "title": "Galaxy Clusters: From Fuzzy Images to Sharp Mass Maps with AI!",
                "institute": "Harvard University",
                "text": "This research uses a score-based generative model to reconstruct gas and dark matter density maps of galaxy clusters, conditioned on SZ and X-ray observations. This approach differs from previous work by learning the posterior distribution of the maps, rather than just a point estimate.",
                "paper-title": "Reconstructing Galaxy Cluster Mass Maps using Score-based Generative Modeling",
                "image-path": "flux_paper_image/2410.02857_1728327387.png"
            },

            {
                "startTime": "22:03",
                "arxivId": "2410.02774",
                "arxivLink": "https://arxiv.org/abs/2410.02774",
                "title": "Unlocking the Secrets of Electricity Demand: A Peek Behind the Meter!",
                "institute": "Rotterdam School of Management Erasmus University, London Business School",
                "text": "This research introduces a data-driven inverse optimization (IO) method to estimate unobservable components of electricity demand response, unlike previous work that relies on direct device-level measurements.",
                "paper-title": "Estimating the Unobservable Components of Electricity Demand Response with Inverse Optimization",
                "image-path": "flux_paper_image/2410.02774_1728326909.png"
            },

            {
                "startTime": "22:28",
                "arxivId": "2410.03432",
                "arxivLink": "https://arxiv.org/abs/2410.03432",
                "title": "Danish News Recommender Dataset: A Million Users, 37 Million Clicks, and a Whole Lotta News!",
                "institute": "ETH Zurich, University of Bari, Polytechnic University of Bari...",
                "text": "This research introduces a new dataset, EB-NeRD, specifically designed for news recommendation. Unlike previous datasets, EB-NeRD is sourced directly from a traditional news publisher, Ekstra Bladet, and includes detailed information about articles, user behavior, and even user demographics.",
                "paper-title": "EB-NeRD: A Large-Scale Dataset for News Recommendation",
                "image-path": "flux_paper_image/2410.03432_1728343489.png"
            },

            {
                "startTime": "22:55",
                "arxivId": "2410.03143",
                "arxivLink": "https://arxiv.org/abs/2410.03143",
                "title": "ECG to ECHO: Turning Heartbeat Data into Ultrasound Videos!",
                "institute": "Harvard University",
                "text": "This research proposes ECHOPulse, a model that generates echocardiogram (ECHO) videos using readily available electrocardiogram (ECG) signals as input. Unlike previous methods that rely on complex conditional prompts, ECHOPulse leverages the inherent temporal correlation between ECG and ECHO data, making it more efficient and accessible.",
                "paper-title": "ECHOPulse: ECG controlled echocardio-grams video generation",
                "image-path": "flux_paper_image/2410.03143_1728325785.png"
            },

            {
                "startTime": "23:16",
                "arxivId": "2410.02829",
                "arxivLink": "https://arxiv.org/abs/2410.02829",
                "title": "AI Can't Beat You at Wordle, But It Can Tell You How Hard It Is",
                "institute": "Adobe, Columbia University",
                "text": "This research explores the use of Large Language Models (LLMs) as game testers, specifically to measure game difficulty. Unlike previous work that focused on developing AI agents for optimal gameplay, this study investigates how LLMs can be used to assess the relative difficulty of challenges within a game, comparing their performance to human players.",
                "paper-title": "LLMs May Not Be Human-Level Players, But They Can Be Testers: Measuring Game Difficulty with LLM Agents",
                "image-path": "flux_paper_image/2410.02829_1728328033.png"
            },

            {
                "startTime": "23:40",
                "arxivId": "2410.03058",
                "arxivLink": "https://arxiv.org/abs/2410.03058",
                "title": "Cell Annotations: DiffKillR Slashes Labeling Time with Clever Diffeomorphisms!",
                "institute": "Yale University",
                "text": "This research introduces DiffKillR, a framework that uses two neural networks to efficiently annotate cells in microscopy images. Unlike previous methods that rely heavily on supervised learning, DiffKillR leverages a small set of annotated archetypes and applies diffeomorphisms to propagate annotations across large images.",
                "paper-title": "DiffKillR: Killing and Recreating Diffeomorphisms for Cell Annotation in Dense Microscopy Images",
                "image-path": "flux_paper_image/2410.03058_1728326225.png"
            },

            {
                "startTime": "24:07",
                "arxivId": "2410.03477",
                "arxivLink": "https://arxiv.org/abs/2410.03477",
                "title": "Neural Networks: Learning One Layer is Hard, Like Really Hard!",
                "institute": "Yale University",
                "text": "This paper proves that learning one hidden layer neural networks under Gaussian noise is computationally hard, even when the noise is polynomially small. This is a significant improvement over previous work, which only proved hardness for adversarial noise.",
                "paper-title": "On the Hardness of Learning One Hidden Layer Neural Networks",
                "image-path": "flux_paper_image/2410.03477_1728343178.png"
            },

            {
                "startTime": "24:27",
                "arxivId": "2410.03085",
                "arxivLink": "https://arxiv.org/abs/2410.03085",
                "title": "Constrained Optimization: A Semi-Supervised BNN Sandwich for Faster, More Accurate Solutions",
                "institute": "Los Alamos National Laboratory, MIT",
                "text": "This research proposes a semi-supervised Bayesian Neural Network (BNN) approach for solving constrained optimization problems, which differs from previous work by incorporating unlabeled data through input data augmentation to ensure constraint feasibility without relying on a large number of labeled instances.",
                "paper-title": "Optimization Proxies using Limited Labeled Data and Training Time -- A Semi-Supervised Bayesian Neural Network Approach",
                "image-path": "flux_paper_image/2410.03085_1728327172.png"
            },

            {
                "startTime": "24:52",
                "arxivId": "2410.03450",
                "arxivLink": "https://arxiv.org/abs/2410.03450",
                "title": "Embodied AI Gets a Memory Makeover: Interactive Learning Makes Robots Smarter!",
                "institute": "Peking University",
                "text": "This research introduces a novel method for training a multimodal retriever that prioritizes the effectiveness of trajectories for embodied agents. Unlike previous work that relies on surface-level similarities, this approach uses interactive learning to fine-tune the retriever based on preference data, ensuring that the retrieved trajectories are actually helpful for completing tasks.",
                "paper-title": "MLLM as Retriever: Interactively Learning Multimodal Retrieval for Embodied Agents",
                "image-path": "flux_paper_image/2410.03450_1728344033.png"
            },

            {
                "startTime": "25:12",
                "arxivId": "2410.03039",
                "arxivLink": "https://arxiv.org/abs/2410.03039",
                "title": "Oops, You Leaked Your Data! AI Model Reveals Your Training Images",
                "institute": "CMU",
                "text": "This research proposes a new framework, FineXtract, for extracting training data from fine-tuned diffusion models. Unlike previous work that focused on general generative processes, FineXtract specifically targets the personalized data used in fine-tuning.",
                "paper-title": "Revealing the Unseen: Guiding Personalized Diffusion Models to Expose Training Data",
                "image-path": "flux_paper_image/2410.03039_1728325765.png"
            },

            {
                "startTime": "25:32",
                "arxivId": "2410.03147",
                "arxivLink": "https://arxiv.org/abs/2410.03147",
                "title": "Robots Can't Tell a Joke, But They Can Tell if You're Fake Laughing!",
                "institute": "Kyoto University",
                "text": "This study distinguishes between interactions with a tele-operated robot and an autonomous dialogue system by analyzing user spoken behaviors, a novel approach compared to previous research.",
                "paper-title": "Analysis and Detection of Differences in Spoken User Behaviors between Autonomous and Wizard-of-Oz Systems",
                "image-path": "flux_paper_image/2410.03147_1728327578.png"
            },

            {
                "startTime": "25:47",
                "arxivId": "2410.03311",
                "arxivLink": "https://arxiv.org/abs/2410.03311",
                "title": "Million-Motion Mania: Building a Giant Model for Human Movement!",
                "institute": "Peking University",
                "text": "This research introduces MotionBase, a massive dataset containing over a million motion sequences, significantly larger than previous datasets. It also proposes a novel 2D lookup-free motion quantization method that improves the representation of motion data.",
                "paper-title": "Quo Vadis, Motion Generation? From Large Language Models to Large Motion Models",
                "image-path": "flux_paper_image/2410.03311_1728344309.png"
            },

            {
                "startTime": "26:09",
                "arxivId": "2410.03569",
                "arxivLink": "https://arxiv.org/abs/2410.03569",
                "title": "Modular Math Made Easy: Transformers Learn to Add at Scale!",
                "institute": "FAIR Meta, Duke University",
                "text": "This research focuses on training machine learning models to perform modular addition, a fundamental operation in cryptography. Unlike previous work that struggled with adding more than six elements modulo a small number, this paper proposes new techniques that enable models to add up to 256 elements modulo 3329, significantly expanding the capabilities of ML in this domain.",
                "paper-title": "Teaching Transformers Modular Arithmetic at Scale",
                "image-path": "flux_paper_image/2410.03569_1728344023.png"
            },

            {
                "startTime": "26:32",
                "arxivId": "2410.02788",
                "arxivLink": "https://arxiv.org/abs/2410.02788",
                "title": "MoCap Mayhem: A New Solver for Unlabeled Motion Capture Data",
                "institute": "Zhejiang University, Tencent Games, Tencent Technology (Shenzhen) Co. LTD...",
                "text": "This research introduces RoMo, a framework that uses a divide-and-conquer strategy to label and solve full-body motion capture data. Unlike previous methods that rely on pre-labeled data or single-frame information, RoMo leverages temporal continuity by generating marker tracklets using a K-partite graph-based clustering algorithm.",
                "paper-title": "RoMo: A Robust Solver for Full-body Unlabeled Optical Motion Capture",
                "image-path": "flux_paper_image/2410.02788_1728327411.png"
            },

            {
                "startTime": "26:54",
                "arxivId": "2410.03600",
                "arxivLink": "https://arxiv.org/abs/2410.03600",
                "title": "Watermarking LLMs: Finding the Needle in the Text Haystack",
                "institute": "UC Berkeley, Zhejiang University, UC San Diego...",
                "text": "This research focuses on identifying watermarked segments within longer, mixed-source texts, unlike previous work that primarily focused on classifying entire documents as watermarked or not.",
                "paper-title": "Efficiently Identifying Watermarked Segments in Mixed-Source Texts",
                "image-path": "flux_paper_image/2410.03600_1728343426.png"
            },

            {
                "startTime": "27:22",
                "arxivId": "2410.03303",
                "arxivLink": "https://arxiv.org/abs/2410.03303",
                "title": "Embodied AI Learns to Think for Itself: No Humans Needed!",
                "institute": "Peking University",
                "text": "This research proposes a novel self-learning paradigm for embodied multi-modal large language models (MLLMs) that doesn't rely on external feedback like human annotations or environmental rewards. It uses an actor-critic framework, where the critic evaluates the actor's actions and provides feedback to improve its decision-making.",
                "paper-title": "SELU: Self-Learning Embodied MLLMs in Unknown Environments",
                "image-path": "flux_paper_image/2410.03303_1728343607.png"
            },

            {
                "startTime": "27:49",
                "arxivId": "2410.03168",
                "arxivLink": "https://arxiv.org/abs/2410.03168",
                "title": "Can You Tell If a Chatbot's Got a Secret? New Research Uncovers Watermarked LLMs!",
                "institute": "Tsinghua University, Beijing University of Posts and Telecommunications, University of Illinois at Chicago...",
                "text": "This research focuses on the imperceptibility of watermarked LLMs, investigating whether users can detect the presence of watermarks through crafted prompts. Previous work primarily focused on improving watermark detectability and robustness, neglecting the potential for users to identify watermarked LLMs.",
                "paper-title": "Can Watermarked LLMs be Identified by Users via Crafted Prompts?",
                "image-path": "flux_paper_image/2410.03168_1728342927.png"
            },

            {
                "startTime": "28:12",
                "arxivId": "2410.03011",
                "arxivLink": "https://arxiv.org/abs/2410.03011",
                "title": "Transformers: Predicting the Future, One Token at a Time!",
                "institute": "\u00c9cole normale sup\u00e9rieure, CNRS",
                "text": "This research explores the ability of Transformers to predict the next token in a sequence generated by a context-dependent function, focusing on specific instances like linear and periodic sequences. Unlike previous work, it introduces a causal kernel descent method that can be implemented with a Transformer model.",
                "paper-title": "Towards Understanding the Universality of Transformers for Next-Token Prediction",
                "image-path": "flux_paper_image/2410.03011_1728327814.png"
            },

            {
                "startTime": "28:37",
                "arxivId": "2410.03645",
                "arxivLink": "https://arxiv.org/abs/2410.03645",
                "title": "Robots Learn New Tricks: LLMs Power Up Simulation Data Generation",
                "institute": "Tsinghua University, UCSD, Shanghai Jiao Tong University...",
                "text": "This research introduces GenSim2, a framework that uses multi-modal and reasoning LLMs to generate complex robotic simulation tasks and demonstrations at scale. Unlike previous work, GenSim2 focuses on generating long-horizon tasks with articulated objects, requiring more sophisticated planning and reasoning capabilities.",
                "paper-title": "GenSim2: Scaling Robot Data Generation with Multi-modal and Reasoning LLMs",
                "image-path": "flux_paper_image/2410.03645_1728344039.png"
            },

            {
                "startTime": "29:05",
                "arxivId": "2410.02789",
                "arxivLink": "https://arxiv.org/abs/2410.02789",
                "title": "Wall Switches and Cameras: AI Learns Your Room's Preferences",
                "institute": "University of Tokyo",
                "text": "This research proposes a new architecture for building automation called Logic-Free Building Automation (LFBA) that uses deep learning to control room facilities without relying on predefined logic or reinforcement learning.",
                "paper-title": "Logic-Free Building Automation: Learning the Control of Room Facilities with Wall Switches and Ceiling Camera",
                "image-path": "flux_paper_image/2410.02789_1728327139.png"
            },

            {
                "startTime": "29:37",
                "arxivId": "2410.03464",
                "arxivLink": "https://arxiv.org/abs/2410.03464",
                "title": "S7: State-Space Models Get a Memory Makeover!",
                "institute": "University of Zurich, ETH Zurich",
                "text": "This paper introduces S7, a state-space model that incorporates input-dependent dynamics, allowing it to dynamically adjust state transitions based on input content. This differs from previous models like S4 and S5, which lacked this adaptive capability.",
                "paper-title": "S7: Selective and Simplified State Space Layers for Sequence Modeling",
                "image-path": "flux_paper_image/2410.03464_1728343402.png"
            },

            {
                "startTime": "30:10",
                "arxivId": "2410.02828",
                "arxivLink": "https://arxiv.org/abs/2410.02828",
                "title": "AI Red Teaming: PyRIT Helps GenAI Models Pass the Safety Test",
                "institute": "Microsoft",
                "text": "This research introduces PyRIT, an open-source framework specifically designed for red teaming generative AI systems. Unlike existing tools, PyRIT focuses on the unique challenges of assessing the security of multimodal GenAI models, offering a model- and platform-agnostic approach.",
                "paper-title": "PyRIT: A Framework for Security Risk Identification and Red Teaming in Generative AI System",
                "image-path": "flux_paper_image/2410.02828_1728326122.png"
            },

            {
                "startTime": "30:28",
                "arxivId": "2410.03094",
                "arxivLink": "https://arxiv.org/abs/2410.03094",
                "title": "Entangled Brains: Quantum Computers Learn Faster Than Ever!",
                "institute": "Tsinghua University, California Institute of Technology, Hefei National Laboratory...",
                "text": "This research establishes a noise-robust, unconditional quantum learning advantage in terms of expressivity, inference speed, and training efficiency, compared to commonly-used classical models. The key difference is that the quantum model leverages entanglement to reduce the communication required for non-local machine learning tasks.",
                "paper-title": "Entanglement-induced provable and robust quantum learning advantages",
                "image-path": "flux_paper_image/2410.03094_1728326621.png"
            },

            {
                "startTime": "30:49",
                "arxivId": "2410.03439",
                "arxivLink": "https://arxiv.org/abs/2410.03439",
                "title": "LLMs Learn to Use Tools: No More Googling for Answers!",
                "institute": "Mohamed bin Zayed University of Artificial Intelligence, Microsoft, UC Los Angeles",
                "text": "This research introduces ToolGen, a framework that integrates tool knowledge directly into the LLM's parameters, allowing it to generate tool calls and arguments as part of its next token prediction capabilities. This differs from previous methods that rely on separate retrieval mechanisms and inputting tool descriptions as context.",
                "paper-title": "ToolGen: Unified Tool Retrieval and Calling via Generation",
                "image-path": "flux_paper_image/2410.03439_1728343789.png"
            },

            {
                "startTime": "31:20",
                "arxivId": "2410.02898",
                "arxivLink": "https://arxiv.org/abs/2410.02898",
                "title": "Deep Learning Makes Robots Stay Put: A New Approach to Reach-Avoid-Stay Problems",
                "institute": "North Carolina State University, UC Berkeley, Honda Research Institute",
                "text": "This research introduces a two-step deep deterministic policy gradient (DDPG) method for solving reach-avoid-stay (RAS) problems. Unlike previous methods, this approach leverages robust viability kernel analysis to identify the maximal control invariant set within the target set, ensuring the system stays within the target after reaching it.",
                "paper-title": "Solving Reach-Avoid-Stay Problems Using Deep Deterministic Policy Gradients",
                "image-path": "flux_paper_image/2410.02898_1728326418.png"
            },

            {
                "startTime": "31:49",
                "arxivId": "2410.03555",
                "arxivLink": "https://arxiv.org/abs/2410.03555",
                "title": "Seeing Around Corners: Robots Get X-Ray Vision with Single-Photon LiDAR",
                "institute": "MIT, University of Wisconsin-Madison, Dartmouth College",
                "text": "This research explores the use of multi-bounce LiDAR for autonomous navigation, specifically focusing on using single-photon LiDAR to \"see\" around corners and detect hidden objects. This differs from previous work that primarily focused on 3D imaging with NLOS LiDAR.",
                "paper-title": "Enhancing Autonomous Navigation by Imaging Hidden Objects using Single-Photon LiDAR",
                "image-path": "flux_paper_image/2410.03555_1728343664.png"
            },

            {
                "startTime": "32:15",
                "arxivId": "2410.02924",
                "arxivLink": "https://arxiv.org/abs/2410.02924",
                "title": "Can AI Read Your Mind? New Research Uses Language to Fix Depth Perception in Images",
                "institute": "Yale University",
                "text": "This research proposes a novel method called RSA (Resolving Scale Ambiguities) that uses language descriptions to infer the scale of 3D scenes in monocular depth estimation. Unlike previous methods that rely on training data with specific scales or require ground truth for scaling, RSA leverages the semantic information in text captions to transform relative depth predictions into metric-scaled depth maps.",
                "paper-title": "RSA: Resolving Scale Ambiguities in Monocular Depth Estimators through Language Descriptions",
                "image-path": "flux_paper_image/2410.02924_1728327308.png"
            },

            {
                "startTime": "32:39",
                "arxivId": "2410.02786",
                "arxivLink": "https://arxiv.org/abs/2410.02786",
                "title": "Symmetry Detection: Langevin Dynamics Makes It Rain (and It's Not Just for Images!)",
                "institute": "Stanford University",
                "text": "This research applies Langevin dynamics, a technique typically used in generative models, to the problem of symmetry detection. This approach differs from previous methods by directly walking on the transformation manifold, which is a space representing all possible symmetries, and using the score function to guide the search for symmetries.",
                "paper-title": "Robust Symmetry Detection via Riemannian Langevin Dynamics",
                "image-path": "flux_paper_image/2410.02786_1728326952.png"
            },

            {
                "startTime": "33:00",
                "arxivId": "2410.03072",
                "arxivLink": "https://arxiv.org/abs/2410.03072",
                "title": "Robots Learn to Dance: Diffusion Models Choreograph Multi-Robot Motion Planning",
                "institute": "CMU",
                "text": "This research proposes a method for generating collision-free multi-robot trajectories using diffusion models, but instead of learning from complex multi-robot data, it leverages single-robot data and combines it with classical search-based techniques.",
                "paper-title": "Multi-Robot Motion Planning with Diffusion Models",
                "image-path": "flux_paper_image/2410.03072_1728327322.png"
            },

            {
                "startTime": "33:21",
                "arxivId": "2410.03463",
                "arxivLink": "https://arxiv.org/abs/2410.03463",
                "title": "Diffusion Models Get a Reality Check: New Method Keeps Them Grounded in Data",
                "institute": "Caltech",
                "text": "This paper proposes a new method called Diffusion State-Guided Projected Gradient (DiffStateGrad) to improve the performance of diffusion models in solving inverse problems. Unlike previous approaches that rely on approximations or projections to the measurement likelihood, DiffStateGrad projects the measurement gradient onto a subspace defined by the intermediate state of the diffusion process. This helps to ensure that the diffusion process stays closer to the data manifold, leading to more accurate and robust reconstructions.",
                "paper-title": "Diffusion State-Guided Projected Gradient for Inverse Problems",
                "image-path": "flux_paper_image/2410.03463_1728343691.png"
            },

            {
                "startTime": "33:56",
                "arxivId": "2410.02874",
                "arxivLink": "https://arxiv.org/abs/2410.02874",
                "title": "Robot Chef Learns to Cook from Recipes, But Can It Handle a Burnt Pot?",
                "institute": "University of Tokyo",
                "text": "This research proposes a robot system that combines Large Language Models (LLMs) and classical planning with food state recognition using Vision-Language Models (VLMs) to enable robots to cook from new recipes in real-world environments. This differs from previous work by integrating these technologies to create a more comprehensive and adaptable cooking system.",
                "paper-title": "Real-world cooking robot system from recipes based on food state recognition using foundation models and PDDL",
                "image-path": "flux_paper_image/2410.02874_1728325979.png"
            },

            {
                "startTime": "34:18",
                "arxivId": "2410.02914",
                "arxivLink": "https://arxiv.org/abs/2410.02914",
                "title": "Conformal Retrieval: Shrinking Search Results Without Losing the Treasure!",
                "institute": "Google, Technion \u2013 Israel Institute of Technology",
                "text": "This paper introduces a score refinement method that modifies retrieval scores before applying conformal prediction. This approach aims to reduce the size of the retrieved sets while maintaining the statistical guarantees of conformal prediction.",
                "paper-title": "Streamlining Conformal Information Retrieval via Score Refinement",
                "image-path": "flux_paper_image/2410.02914_1728326985.png"
            },

            {
                "startTime": "34:39",
                "arxivId": "2410.03334",
                "arxivLink": "https://arxiv.org/abs/2410.03334",
                "title": "X-Ray Vision: AI Decodes Medical Images for Better Reports",
                "institute": "UCL, Microsoft Research, Independent Researcher",
                "text": "This research uses sparse autoencoders (SAEs) to break down image representations into human-interpretable features, which are then used to generate radiology reports. This approach differs from previous work that relies on fine-tuning large language models (LLMs) on image-text pairs.",
                "paper-title": "An X-Ray Is Worth 15 Features: Sparse Autoencoders for Interpretable Radiology Report Generation",
                "image-path": "flux_paper_image/2410.03334_1728344126.png"
            },

            {
                "startTime": "35:00",
                "arxivId": "2410.03462",
                "arxivLink": "https://arxiv.org/abs/2410.03462",
                "title": "Transformers Get Topological: Graph Random Features Make Attention Scalable",
                "institute": "University of Cambridge, Google, Alan Turing Institute...",
                "text": "This paper proposes a novel approach to topological masking in transformers, using graph random features (GRFs) to approximate the mask function. This allows for efficient masking of low-rank attention, achieving O(N) time and space complexity, unlike previous methods that were limited to specific graph structures or had higher complexity.",
                "paper-title": "Linear Transformer Topological Masking with Graph Random Features",
                "image-path": "flux_paper_image/2410.03462_1728342920.png"
            },

            {
                "startTime": "35:24",
                "arxivId": "2410.03208",
                "arxivLink": "https://arxiv.org/abs/2410.03208",
                "title": "SPHINX: Unveiling Hidden Connections with a Hypergraph Sleuth",
                "institute": "University of Cambridge",
                "text": "This paper introduces SPHINX, a model that learns to infer a latent hypergraph structure from data without needing explicit higher-order annotations. Unlike previous methods that rely on pairwise connections or require heavy regularization, SPHINX uses a sequential, differentiable clustering approach and k-subset sampling to produce a discrete hypergraph structure.",
                "paper-title": "SPHINX: Structural Prediction using Hypergraph Inference Network",
                "image-path": "flux_paper_image/2410.03208_1728343615.png"
            },

            {
                "startTime": "35:46",
                "arxivId": "2410.03437",
                "arxivLink": "https://arxiv.org/abs/2410.03437",
                "title": "Solving PDEs with a Zebra: In-Context Learning for Parametric Equations",
                "institute": "Sorbonne University",
                "text": "This research introduces Zebra, a generative autoregressive transformer that solves parametric PDEs without requiring gradient adaptation at inference. Unlike previous methods that rely on fine-tuning or meta-learning, Zebra leverages in-context learning during both pre-training and inference, allowing it to dynamically adapt to new tasks by conditioning on input sequences that incorporate context trajectories or preceding states.",
                "paper-title": "Zebra: In-Context and Generative Pretraining for Solving Parametric PDEs",
                "image-path": "flux_paper_image/2410.03437_1728344162.png"
            },

            {
                "startTime": "36:09",
                "arxivId": "2410.02921",
                "arxivLink": "https://arxiv.org/abs/2410.02921",
                "title": "Air-Writing AI: Can Machines Decode Our Hand-Drawn Alphabet?",
                "institute": "University of Toronto, Qualcomm, MIT",
                "text": "This research introduces a new dataset called AirLetters, which consists of videos of people drawing letters and numbers in the air. Unlike existing datasets, AirLetters focuses on understanding complex, articulated motions, requiring models to analyze long-range information in the video over time.",
                "paper-title": "AirLetters: An Open Video Dataset of Characters Drawn in the Air",
                "image-path": "flux_paper_image/2410.02921_1728325957.png"
            },

            {
                "startTime": "36:31",
                "arxivId": "2410.02980",
                "arxivLink": "https://arxiv.org/abs/2410.02980",
                "title": "Deep Learning's New Diet: Deciding When to Train for Maximum Accuracy, Minimum Calories!",
                "institute": "MIT",
                "text": "This research proposes DecTrain, an algorithm that decides when to train a monocular depth DNN online based on the predicted accuracy gain and the cost of training. Unlike previous work that either trains continuously or not at all, DecTrain strategically chooses when to train, aiming to optimize accuracy while minimizing computational cost.",
                "paper-title": "DecTrain: Deciding When to Train a DNN Online",
                "image-path": "flux_paper_image/2410.02980_1728327405.png"
            },

            {
                "startTime": "36:59",
                "arxivId": "2410.02830",
                "arxivLink": "https://arxiv.org/abs/2410.02830",
                "title": "YouTube Colonoscopy Prep: A Deep Dive into Patient Engagement",
                "institute": "University of California Irvine, Arizona State University, Michigan State University...",
                "text": "This research goes beyond simply analyzing YouTube videos for medical information. It develops a data analysis pipeline that uses machine learning to identify videos that are both medically accurate and easy for patients to understand.",
                "paper-title": "YouTube Video Analytics for Patient Engagement: Evidence from Colonoscopy Preparation Videos",
                "image-path": "flux_paper_image/2410.02830_1728326658.png"
            },

            {
                "startTime": "37:27",
                "arxivId": "2410.02825",
                "arxivLink": "https://arxiv.org/abs/2410.02825",
                "title": "LLMs Get Grounded: How RAG Stops AI from Making Stuff Up!",
                "institute": "Meta",
                "text": "This research introduces a novel approach to reduce hallucinations in LLMs by continually pre-training them with a privacy-specific knowledge base and augmenting them with a semantic RAG layer. This differs from previous work by focusing on a specific domain (privacy) and combining continual pre-training with a semantic RAG layer.",
                "paper-title": "Ingest-And-Ground: Dispelling Hallucinations from Continually-Pretrained LLMs with RAG",
                "image-path": "flux_paper_image/2410.02825_1728327018.png"
            },

            {
                "startTime": "37:48",
                "arxivId": "2410.02976",
                "arxivLink": "https://arxiv.org/abs/2410.02976",
                "title": "Spacecraft Trajectory Design: Diffusion Models Learn to Navigate the Cosmos",
                "institute": "Princeton University",
                "text": "This research extends previous work by applying diffusion models to learn the structure of optimal control solutions for two specific global search problems in the Circular Restricted Three-Body Problem (CR3BP). The study focuses on a hybrid cost function and a variable terminal boundary condition, demonstrating the model's ability to capture complex structures in the solutions space.",
                "paper-title": "Learning Optimal Control and Dynamical Structure of Global Trajectory Search Problems with Diffusion Models",
                "image-path": "flux_paper_image/2410.02976_1728327979.png"
            },

            {
                "startTime": "38:11",
                "arxivId": "2410.03070",
                "arxivLink": "https://arxiv.org/abs/2410.03070",
                "title": "Missing Modalities? No Problem! FedMAC to the Rescue!",
                "institute": "VinUniversity, Washington State University, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research tackles the issue of partial-modality missing in federated learning, a scenario where only parts of certain features are missing in client datasets. Unlike previous work that focused on complete modality missing, FedMAC introduces a novel client-side architecture that imputes missing modalities by leveraging intra-modal information and inter-modal correlations.",
                "paper-title": "FedMAC: Tackling Partial-Modality Missing in Federated Learning with Cross-Modal Aggregation and Contrastive Regularization",
                "image-path": "flux_paper_image/2410.03070_1728327846.png"
            }
    ],
    "stats": {
        "num_pick": 95,
        "num_total": 388,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410071649_audio.mp3"
}